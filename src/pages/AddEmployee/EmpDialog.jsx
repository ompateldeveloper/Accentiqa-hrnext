import { Card, Dialog } from '@mui/material'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useAuthContext } from '../../contexts/AuthContext';
import axios from 'axios';
import { Check, Edit, Loader2, Plus, Trash } from 'lucide-react';
import  Button  from '../../components/ui/Button';
export default function EmpDialog({ open, handleClose, dialogUrl ,setLatch}) {
    const [data, setData] = useState([]);
    const { user } = useAuthContext();

    const [name, setName] = useState('');
    const [isLoading, setIsLoading] = useState(false)

    useLayoutEffect(() => {
        if (dialogUrl !== '') {
            axios
                .get(dialogUrl, {
                    headers: {
                        Authorization: `Bearer ${user?.token}`,
                    },
                })
                .then((response) => {
                    setData(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        return()=>{
            setData([])
        }
    }, [dialogUrl])

    const handleCreate = (e) => {
        e.preventDefault();
        setIsLoading(true)
        axios
            .post(dialogUrl, { name }, {
                headers: {
                    Authorization: `Bearer ${user?.token}`,
                },
            })
            .then((response) => {
                setData([...data,response.data])
                setName('')
                setLatch(prev=>!prev)
                setIsLoading(false)
            })
            .catch((error) => {
                console.log(error);
            });

    }

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <Card
                style={{
                    maxWidth: 450,
                    padding: "20px 30px",
                    margin: "0 auto",
                }}
            >
                <div className="">
                    {
                        data?.map((d, i) => (
                            <Item d={d} dialogUrl={dialogUrl} data={data} setData={setData} setLatch={setLatch} />
                        ))
                    }
                </div>
                <form onSubmit={handleCreate} className='flex items-center justify-between pl-2'>
                    <input type="text" className='rounded border-2 outline-none border-theme-zinc-100 focus:border-theme-1' value={name} onChange={(e)=>setName(e.target.value)} />
                    <Button className='py-px' iconleft={<Plus/>} disabled={isLoading}/>
                </form>

            </Card>
        </Dialog>
    )
}

function Item({ d, dialogUrl, setData, data,setLatch }) {
    const [edit, setEdit] = useState(false);
    const { user } = useAuthContext();
    const [name, setName] = useState(d.name);
    const [isLoading, setIsLoading] = useState(false)

    const handleUpdate = (e) => {
        e.preventDefault();
        setIsLoading(true)
        axios
            .put(dialogUrl + "/" + d.id, { name }, {
                headers: {
                    Authorization: `Bearer ${user?.token}`,
                },
            })
            .then((response) => {
                console.log(response.data);
                const newData = data.map((obj) => (
                    obj.id === response.data.id
                        ?
                        response.data
                        :
                        obj
                ))
                setData(newData);
                setLatch(prev=>!prev)
                setEdit(false)
                setIsLoading(false)
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const handleDelete = () => {
        axios
            .delete(dialogUrl + "/" + d.id, {
                headers: {
                    Authorization: `Bearer ${user?.token}`,
                },
            })
            .then((response) => {
                console.log(response.data);
                const newData = data.filter((obj) => (obj.id !== response.data.id))
                setData(newData);
                setLatch(prev=>!prev)
            })
            .catch((error) => {
                console.log(error);
            });
    }


    return (
        <form onSubmit={edit ? handleUpdate : null} className="flex items-center justify-between" >
            <input type="text" className='p-1 mx-2' value={name} readOnly={edit ? false : true} onChange={(e) => { setName(e.target.value) }} />
            <div className="flex ">
                {
                    isLoading ?
                        <Loader2 className='animate-spin w-4 ml-1 text-theme-success' />
                        :
                        (edit
                            ?
                            <button type='submit'>
                                <Check className='w-4 ml-1 text-theme-success' />
                            </button>
                            :
                            <Edit className='w-4 ml-1 text-theme-1' onClick={() => { setEdit(true) }} />)
                }
                <Trash className='w-4 ml-1 text-theme-danger' onClick={handleDelete} />
            </div>
        </form>
    )
}


