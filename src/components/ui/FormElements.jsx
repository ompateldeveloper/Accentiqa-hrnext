import { cn } from "../../lib/utils"
import { v4 as uuidv4 } from 'uuid';

export function Input(props) {
    const inputId = props.id || uuidv4();
    return (
        <div className={cn("flex flex-col-reverse gap-2 pb-5 md:max-w-96", props.className)}>
            {props.error && <p className="text-theme-danger text-xs italic absolute -mb-5">{props.error}</p>}
            <input
                {...props}
                id={inputId}
                type={props.type || 'text'}
                className={cn("w-full h-12 p-2 peer bg-transparent border-2 border-gray-200 rounded-lg focus:border-theme-1 outline-none text-gray-900 transition duration-300")}
            />
            {props.label && <label htmlFor={inputId} className="peer-focus:text-theme-1 text-sm text-gray-400 duration-300 select-none">{props.label}</label>}

        </div>
    )
}

export function Select(props) {
    const selectId = props.id || uuidv4();
    const { optionsArray } = props;
    return (
        <div className="flex items-center flex-grow">
            <div className="flex flex-col-reverse gap-2 pb-5 md:max-w-96 flex-grow">
                {props.error && <p className="text-theme-danger text-2xs italic absolute -mb-5">{props.error}</p>}
                <select
                    {...props}
                    id={selectId}
                    className={cn("w-full bg-theme-1 font-semibold text-theme-text text-opacity-50 focus:text-opacity-100  h-10 p-2 peer bg-transparent border border-gray-200 rounded-lg focus:border-theme-1 outline-none transition duration-300", props.className)}
                >
                    {optionsArray?.map((data, index) => {
                        const isDefault = (data.id==="" || data.value==="")?"true":''
                        return <option key={index} disabled={isDefault} className="outline-none border-none text-theme-text hover:bg-theme-2 font-semibold" value={data.value || data.id}>{data.title || data.name}</option>
                    })}
                </select>
                {props.label && <label htmlFor={selectId} className="peer-focus:text-theme-1 text-gray-400 text-sm duration-300 select-none">{props.label}</label>}
            </div>
            {props.edit && props.edit}
        </div>

    )
}

export function Checkbox(props) {
    const inputId = props.id || uuidv4();
    return (
        <div className="flex items-center justify-center gap-2">
            <input
                id={inputId}
                type="checkbox"
                name={props.name}
                className={cn(" h-4 w-4 p-2 peer bg-transparent border-2 border-gray-200 rounded-lg focus:border-theme-1 outline-none text-gray-900 transition duration-300", props.className)}
                checked={props.value}
                onChange={props.onChange}
            // {...props} 
            />
            {props.label && <label htmlFor={inputId} className="peer-checked:text-theme-1 text-gray-400 duration-300 select-none">{props.label}</label>}
            {props.error && <p className="text-theme-danger text-xs italic">{props.error}</p>}
        </div>
    )
}

export function Radio(props) {
    const inputId = props.id || uuidv4();
    return (
        <div className="flex items-center justify-center gap-1">
            <input
                {...props}
                id={inputId}
                type="radio"
                className={cn(" h-4 w-4 p-2 peer bg-transparent border-2 border-gray-200 rounded-lg focus:border-theme-1 outline-none text-gray-900 transition duration-300", props.className)}
            />
            {props.label && <label htmlFor={inputId} className="peer-checked:text-theme-1 text-xs text-gray-400 duration-300 select-none">{props.label}</label>}

        </div>
    )
}
export function RadioGroup(props) {
    return (
        <div className=" justify-center  h-10 p-2 pb-5 md:max-w-96 mb-8">
            {props.label && <div className="peer-checked:text-theme-1 text-sm text-gray-400 duration-300 select-none">{props.label}</div>}
            <div className={cn("h-12 ", props.className)}>
                {props.children}
            </div>
            {props.error && <p className="text-theme-danger text-2xs italic absolute -mb-">{props.error}</p>}
        </div>
    )
}
