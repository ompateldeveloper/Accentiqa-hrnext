import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { Route, Routes } from 'react-router-dom'
import EmployeeDetails from './EmployeeDetails'
export default function Dashboard() {
    return (
        <div>
            <Navbar />

            <div className="flex ">
                <Sidebar />
                <div className="routeswrapper  ml-80 mt-20 p-2">
                    <Routes>
                        <Route path='*' element={<Dashboard404/>} />
                        <Route path='/' element={<>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, hic velit odio sed mollitia totam accusamus ad laudantium architecto quos minima est consequatur suscipit quia minus nulla vel rem quaerat iure quasi porro eligendi exercitationem aliquid neque. Eveniet distinctio voluptatem, minima quaerat nihil aliquam natus molestias similique corrupti nostrum tempora repudiandae nam doloribus consequuntur. Nemo cum, voluptatibus minima amet eos consectetur dignissimos pariatur aperiam reiciendis veniam repellat nihil inventore impedit! Maiores a dolores incidunt corrupti ad odit, quas voluptas ullam, nisi, eos ipsum numquam? Magni placeat temporibus delectus rerum? Dolore repudiandae sed explicabo, quibusdam magni fugit odio fuga vero cumque doloremque quam veritatis facere temporibus nihil culpa, maxime quas dolor. Odit officia atque labore accusantium reprehenderit hic voluptatibus vel quis possimus, veritatis, ratione neque deleniti eum, mollitia a! Mollitia eveniet delectus ad nemo voluptates dignissimos nisi excepturi impedit nam illum provident, sunt voluptatem eius nobis quo facere maiores. Nihil ab aliquid velit voluptates tenetur molestiae dolores quisquam. Neque doloribus ea dignissimos? Dicta, in! Architecto quibusdam asperiores aliquam illum corporis doloribus aut nostrum. Dolores consectetur expedita aliquam cum quis quo iste velit dolorum cumque omnis, amet earum commodi reprehenderit quasi laborum, asperiores modi. Qui fugit quae ipsam, doloremque, odio dolore reprehenderit, sint dignissimos repellat consectetur est. Consectetur accusantium eaque nemo ut illum optio fugit reprehenderit qui vel quia minus, ullam quis aspernatur quidem atque nam? Perferendis quam tempora eum magnam rerum soluta eveniet officiis temporibus. Corporis atque minima quas nulla unde doloremque incidunt animi, quae reiciendis vel cum deserunt distinctio laborum vero dolores quis nemo est dolore doloribus, ipsam laudantium! Tempora ducimus consectetur sunt esse quod ad in asperiores, eveniet mollitia placeat quidem hic quasi illum dignissimos tempore iste, natus quia optio consequuntur molestias libero. Voluptas mollitia illo maxime doloribus, tenetur tempore fugiat maiores inventore quos eius et nobis dolorum ipsum minima debitis officiis! Atque eveniet amet iusto vitae doloribus dolores laborum libero, cumque et quidem. Maiores quae est similique velit tempore id, dolor sed voluptatibus laudantium vel ab ullam! Animi labore quia consectetur temporibus, sint nesciunt ipsum incidunt consequuntur eligendi dolore blanditiis. Quasi nesciunt magni dolorem itaque doloribus. Soluta vel maiores repellendus fugit illo! Temporibus nostrum est iure hic molestias beatae rerum dolore voluptatum eum, atque deleniti alias commodi minima nesciunt sed adipisci facilis vero officia earum molestiae minus eveniet tenetur placeat cupiditate? Eum facilis, dolores maxime aliquid officiis distinctio fugit quas odio nam molestiae ad incidunt expedita nemo in maiores magnam dolorem impedit sunt? Iste nobis reprehenderit dolorem doloremque quisquam. Itaque excepturi molestias, veniam eveniet consectetur voluptatum! Vel reiciendis tempora quam recusandae accusamus quisquam, qui consectetur, libero quibusdam nisi ducimus rem sed nam obcaecati suscipit molestias eaque quia neque, ipsa odit culpa? Beatae quia cumque id sit nisi alias officiis explicabo veritatis debitis quam repellendus magnam reiciendis, atque dolorum enim delectus architecto fugiat. Nulla explicabo neque commodi dolore incidunt molestias distinctio consequatur aspernatur, earum nisi, ex perspiciatis ad dolores quasi vero, repellat voluptatibus! Mollitia eligendi iste error unde voluptatibus eius facilis quisquam neque! Eligendi dolore cum corporis? Suscipit, necessitatibus.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, hic velit odio sed mollitia totam accusamus ad laudantium architecto quos minima est consequatur suscipit quia minus nulla vel rem quaerat iure quasi porro eligendi exercitationem aliquid neque. Eveniet distinctio voluptatem, minima quaerat nihil aliquam natus molestias similique corrupti nostrum tempora repudiandae nam doloribus consequuntur. Nemo cum, voluptatibus minima amet eos consectetur dignissimos pariatur aperiam reiciendis veniam repellat nihil inventore impedit! Maiores a dolores incidunt corrupti ad odit, quas voluptas ullam, nisi, eos ipsum numquam? Magni placeat temporibus delectus rerum? Dolore repudiandae sed explicabo, quibusdam magni fugit odio fuga vero cumque doloremque quam veritatis facere temporibus nihil culpa, maxime quas dolor. Odit officia atque labore accusantium reprehenderit hic voluptatibus vel quis possimus, veritatis, ratione neque deleniti eum, mollitia a! Mollitia eveniet delectus ad nemo voluptates dignissimos nisi excepturi impedit nam illum provident, sunt voluptatem eius nobis quo facere maiores. Nihil ab aliquid velit voluptates tenetur molestiae dolores quisquam. Neque doloribus ea dignissimos? Dicta, in! Architecto quibusdam asperiores aliquam illum corporis doloribus aut nostrum. Dolores consectetur expedita aliquam cum quis quo iste velit dolorum cumque omnis, amet earum commodi reprehenderit quasi laborum, asperiores modi. Qui fugit quae ipsam, doloremque, odio dolore reprehenderit, sint dignissimos repellat consectetur est. Consectetur accusantium eaque nemo ut illum optio fugit reprehenderit qui vel quia minus, ullam quis aspernatur quidem atque nam? Perferendis quam tempora eum magnam rerum soluta eveniet officiis temporibus. Corporis atque minima quas nulla unde doloremque incidunt animi, quae reiciendis vel cum deserunt distinctio laborum vero dolores quis nemo est dolore doloribus, ipsam laudantium! Tempora ducimus consectetur sunt esse quod ad in asperiores, eveniet mollitia placeat quidem hic quasi illum dignissimos tempore iste, natus quia optio consequuntur molestias libero. Voluptas mollitia illo maxime doloribus, tenetur tempore fugiat maiores inventore quos eius et nobis dolorum ipsum minima debitis officiis! Atque eveniet amet iusto vitae doloribus dolores laborum libero, cumque et quidem. Maiores quae est similique velit tempore id, dolor sed voluptatibus laudantium vel ab ullam! Animi labore quia consectetur temporibus, sint nesciunt ipsum incidunt consequuntur eligendi dolore blanditiis. Quasi nesciunt magni dolorem itaque doloribus. Soluta vel maiores repellendus fugit illo! Temporibus nostrum est iure hic molestias beatae rerum dolore voluptatum eum, atque deleniti alias commodi minima nesciunt sed adipisci facilis vero officia earum molestiae minus eveniet tenetur placeat cupiditate? Eum facilis, dolores maxime aliquid officiis distinctio fugit quas odio nam molestiae ad incidunt expedita nemo in maiores magnam dolorem impedit sunt? Iste nobis reprehenderit dolorem doloremque quisquam. Itaque excepturi molestias, veniam eveniet consectetur voluptatum! Vel reiciendis tempora quam recusandae accusamus quisquam, qui consectetur, libero quibusdam nisi ducimus rem sed nam obcaecati suscipit molestias eaque quia neque, ipsa odit culpa? Beatae quia cumque id sit nisi alias officiis explicabo veritatis debitis quam repellendus magnam reiciendis, atque dolorum enim delectus architecto fugiat. Nulla explicabo neque commodi dolore incidunt molestias distinctio consequatur aspernatur, earum nisi, ex perspiciatis ad dolores quasi vero, repellat voluptatibus! Mollitia eligendi iste error unde voluptatibus eius facilis quisquam neque! Eligendi dolore cum corporis? Suscipit, necessitatibus.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, hic velit odio sed mollitia totam accusamus ad laudantium architecto quos minima est consequatur suscipit quia minus nulla vel rem quaerat iure quasi porro eligendi exercitationem aliquid neque. Eveniet distinctio voluptatem, minima quaerat nihil aliquam natus molestias similique corrupti nostrum tempora repudiandae nam doloribus consequuntur. Nemo cum, voluptatibus minima amet eos consectetur dignissimos pariatur aperiam reiciendis veniam repellat nihil inventore impedit! Maiores a dolores incidunt corrupti ad odit, quas voluptas ullam, nisi, eos ipsum numquam? Magni placeat temporibus delectus rerum? Dolore repudiandae sed explicabo, quibusdam magni fugit odio fuga vero cumque doloremque quam veritatis facere temporibus nihil culpa, maxime quas dolor. Odit officia atque labore accusantium reprehenderit hic voluptatibus vel quis possimus, veritatis, ratione neque deleniti eum, mollitia a! Mollitia eveniet delectus ad nemo voluptates dignissimos nisi excepturi impedit nam illum provident, sunt voluptatem eius nobis quo facere maiores. Nihil ab aliquid velit voluptates tenetur molestiae dolores quisquam. Neque doloribus ea dignissimos? Dicta, in! Architecto quibusdam asperiores aliquam illum corporis doloribus aut nostrum. Dolores consectetur expedita aliquam cum quis quo iste velit dolorum cumque omnis, amet earum commodi reprehenderit quasi laborum, asperiores modi. Qui fugit quae ipsam, doloremque, odio dolore reprehenderit, sint dignissimos repellat consectetur est. Consectetur accusantium eaque nemo ut illum optio fugit reprehenderit qui vel quia minus, ullam quis aspernatur quidem atque nam? Perferendis quam tempora eum magnam rerum soluta eveniet officiis temporibus. Corporis atque minima quas nulla unde doloremque incidunt animi, quae reiciendis vel cum deserunt distinctio laborum vero dolores quis nemo est dolore doloribus, ipsam laudantium! Tempora ducimus consectetur sunt esse quod ad in asperiores, eveniet mollitia placeat quidem hic quasi illum dignissimos tempore iste, natus quia optio consequuntur molestias libero. Voluptas mollitia illo maxime doloribus, tenetur tempore fugiat maiores inventore quos eius et nobis dolorum ipsum minima debitis officiis! Atque eveniet amet iusto vitae doloribus dolores laborum libero, cumque et quidem. Maiores quae est similique velit tempore id, dolor sed voluptatibus laudantium vel ab ullam! Animi labore quia consectetur temporibus, sint nesciunt ipsum incidunt consequuntur eligendi dolore blanditiis. Quasi nesciunt magni dolorem itaque doloribus. Soluta vel maiores repellendus fugit illo! Temporibus nostrum est iure hic molestias beatae rerum dolore voluptatum eum, atque deleniti alias commodi minima nesciunt sed adipisci facilis vero officia earum molestiae minus eveniet tenetur placeat cupiditate? Eum facilis, dolores maxime aliquid officiis distinctio fugit quas odio nam molestiae ad incidunt expedita nemo in maiores magnam dolorem impedit sunt? Iste nobis reprehenderit dolorem doloremque quisquam. Itaque excepturi molestias, veniam eveniet consectetur voluptatum! Vel reiciendis tempora quam recusandae accusamus quisquam, qui consectetur, libero quibusdam nisi ducimus rem sed nam obcaecati suscipit molestias eaque quia neque, ipsa odit culpa? Beatae quia cumque id sit nisi alias officiis explicabo veritatis debitis quam repellendus magnam reiciendis, atque dolorum enim delectus architecto fugiat. Nulla explicabo neque commodi dolore incidunt molestias distinctio consequatur aspernatur, earum nisi, ex perspiciatis ad dolores quasi vero, repellat voluptatibus! Mollitia eligendi iste error unde voluptatibus eius facilis quisquam neque! Eligendi dolore cum corporis? Suscipit, necessitatibus.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, hic velit odio sed mollitia totam accusamus ad laudantium architecto quos minima est consequatur suscipit quia minus nulla vel rem quaerat iure quasi porro eligendi exercitationem aliquid neque. Eveniet distinctio voluptatem, minima quaerat nihil aliquam natus molestias similique corrupti nostrum tempora repudiandae nam doloribus consequuntur. Nemo cum, voluptatibus minima amet eos consectetur dignissimos pariatur aperiam reiciendis veniam repellat nihil inventore impedit! Maiores a dolores incidunt corrupti ad odit, quas voluptas ullam, nisi, eos ipsum numquam? Magni placeat temporibus delectus rerum? Dolore repudiandae sed explicabo, quibusdam magni fugit odio fuga vero cumque doloremque quam veritatis facere temporibus nihil culpa, maxime quas dolor. Odit officia atque labore accusantium reprehenderit hic voluptatibus vel quis possimus, veritatis, ratione neque deleniti eum, mollitia a! Mollitia eveniet delectus ad nemo voluptates dignissimos nisi excepturi impedit nam illum provident, sunt voluptatem eius nobis quo facere maiores. Nihil ab aliquid velit voluptates tenetur molestiae dolores quisquam. Neque doloribus ea dignissimos? Dicta, in! Architecto quibusdam asperiores aliquam illum corporis doloribus aut nostrum. Dolores consectetur expedita aliquam cum quis quo iste velit dolorum cumque omnis, amet earum commodi reprehenderit quasi laborum, asperiores modi. Qui fugit quae ipsam, doloremque, odio dolore reprehenderit, sint dignissimos repellat consectetur est. Consectetur accusantium eaque nemo ut illum optio fugit reprehenderit qui vel quia minus, ullam quis aspernatur quidem atque nam? Perferendis quam tempora eum magnam rerum soluta eveniet officiis temporibus. Corporis atque minima quas nulla unde doloremque incidunt animi, quae reiciendis vel cum deserunt distinctio laborum vero dolores quis nemo est dolore doloribus, ipsam laudantium! Tempora ducimus consectetur sunt esse quod ad in asperiores, eveniet mollitia placeat quidem hic quasi illum dignissimos tempore iste, natus quia optio consequuntur molestias libero. Voluptas mollitia illo maxime doloribus, tenetur tempore fugiat maiores inventore quos eius et nobis dolorum ipsum minima debitis officiis! Atque eveniet amet iusto vitae doloribus dolores laborum libero, cumque et quidem. Maiores quae est similique velit tempore id, dolor sed voluptatibus laudantium vel ab ullam! Animi labore quia consectetur temporibus, sint nesciunt ipsum incidunt consequuntur eligendi dolore blanditiis. Quasi nesciunt magni dolorem itaque doloribus. Soluta vel maiores repellendus fugit illo! Temporibus nostrum est iure hic molestias beatae rerum dolore voluptatum eum, atque deleniti alias commodi minima nesciunt sed adipisci facilis vero officia earum molestiae minus eveniet tenetur placeat cupiditate? Eum facilis, dolores maxime aliquid officiis distinctio fugit quas odio nam molestiae ad incidunt expedita nemo in maiores magnam dolorem impedit sunt? Iste nobis reprehenderit dolorem doloremque quisquam. Itaque excepturi molestias, veniam eveniet consectetur voluptatum! Vel reiciendis tempora quam recusandae accusamus quisquam, qui consectetur, libero quibusdam nisi ducimus rem sed nam obcaecati suscipit molestias eaque quia neque, ipsa odit culpa? Beatae quia cumque id sit nisi alias officiis explicabo veritatis debitis quam repellendus magnam reiciendis, atque dolorum enim delectus architecto fugiat. Nulla explicabo neque commodi dolore incidunt molestias distinctio consequatur aspernatur, earum nisi, ex perspiciatis ad dolores quasi vero, repellat voluptatibus! Mollitia eligendi iste error unde voluptatibus eius facilis quisquam neque! Eligendi dolore cum corporis? Suscipit, necessitatibus.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, hic velit odio sed mollitia totam accusamus ad laudantium architecto quos minima est consequatur suscipit quia minus nulla vel rem quaerat iure quasi porro eligendi exercitationem aliquid neque. Eveniet distinctio voluptatem, minima quaerat nihil aliquam natus molestias similique corrupti nostrum tempora repudiandae nam doloribus consequuntur. Nemo cum, voluptatibus minima amet eos consectetur dignissimos pariatur aperiam reiciendis veniam repellat nihil inventore impedit! Maiores a dolores incidunt corrupti ad odit, quas voluptas ullam, nisi, eos ipsum numquam? Magni placeat temporibus delectus rerum? Dolore repudiandae sed explicabo, quibusdam magni fugit odio fuga vero cumque doloremque quam veritatis facere temporibus nihil culpa, maxime quas dolor. Odit officia atque labore accusantium reprehenderit hic voluptatibus vel quis possimus, veritatis, ratione neque deleniti eum, mollitia a! Mollitia eveniet delectus ad nemo voluptates dignissimos nisi excepturi impedit nam illum provident, sunt voluptatem eius nobis quo facere maiores. Nihil ab aliquid velit voluptates tenetur molestiae dolores quisquam. Neque doloribus ea dignissimos? Dicta, in! Architecto quibusdam asperiores aliquam illum corporis doloribus aut nostrum. Dolores consectetur expedita aliquam cum quis quo iste velit dolorum cumque omnis, amet earum commodi reprehenderit quasi laborum, asperiores modi. Qui fugit quae ipsam, doloremque, odio dolore reprehenderit, sint dignissimos repellat consectetur est. Consectetur accusantium eaque nemo ut illum optio fugit reprehenderit qui vel quia minus, ullam quis aspernatur quidem atque nam? Perferendis quam tempora eum magnam rerum soluta eveniet officiis temporibus. Corporis atque minima quas nulla unde doloremque incidunt animi, quae reiciendis vel cum deserunt distinctio laborum vero dolores quis nemo est dolore doloribus, ipsam laudantium! Tempora ducimus consectetur sunt esse quod ad in asperiores, eveniet mollitia placeat quidem hic quasi illum dignissimos tempore iste, natus quia optio consequuntur molestias libero. Voluptas mollitia illo maxime doloribus, tenetur tempore fugiat maiores inventore quos eius et nobis dolorum ipsum minima debitis officiis! Atque eveniet amet iusto vitae doloribus dolores laborum libero, cumque et quidem. Maiores quae est similique velit tempore id, dolor sed voluptatibus laudantium vel ab ullam! Animi labore quia consectetur temporibus, sint nesciunt ipsum incidunt consequuntur eligendi dolore blanditiis. Quasi nesciunt magni dolorem itaque doloribus. Soluta vel maiores repellendus fugit illo! Temporibus nostrum est iure hic molestias beatae rerum dolore voluptatum eum, atque deleniti alias commodi minima nesciunt sed adipisci facilis vero officia earum molestiae minus eveniet tenetur placeat cupiditate? Eum facilis, dolores maxime aliquid officiis distinctio fugit quas odio nam molestiae ad incidunt expedita nemo in maiores magnam dolorem impedit sunt? Iste nobis reprehenderit dolorem doloremque quisquam. Itaque excepturi molestias, veniam eveniet consectetur voluptatum! Vel reiciendis tempora quam recusandae accusamus quisquam, qui consectetur, libero quibusdam nisi ducimus rem sed nam obcaecati suscipit molestias eaque quia neque, ipsa odit culpa? Beatae quia cumque id sit nisi alias officiis explicabo veritatis debitis quam repellendus magnam reiciendis, atque dolorum enim delectus architecto fugiat. Nulla explicabo neque commodi dolore incidunt molestias distinctio consequatur aspernatur, earum nisi, ex perspiciatis ad dolores quasi vero, repellat voluptatibus! Mollitia eligendi iste error unde voluptatibus eius facilis quisquam neque! Eligendi dolore cum corporis? Suscipit, necessitatibus.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, hic velit odio sed mollitia totam accusamus ad laudantium architecto quos minima est consequatur suscipit quia minus nulla vel rem quaerat iure quasi porro eligendi exercitationem aliquid neque. Eveniet distinctio voluptatem, minima quaerat nihil aliquam natus molestias similique corrupti nostrum tempora repudiandae nam doloribus consequuntur. Nemo cum, voluptatibus minima amet eos consectetur dignissimos pariatur aperiam reiciendis veniam repellat nihil inventore impedit! Maiores a dolores incidunt corrupti ad odit, quas voluptas ullam, nisi, eos ipsum numquam? Magni placeat temporibus delectus rerum? Dolore repudiandae sed explicabo, quibusdam magni fugit odio fuga vero cumque doloremque quam veritatis facere temporibus nihil culpa, maxime quas dolor. Odit officia atque labore accusantium reprehenderit hic voluptatibus vel quis possimus, veritatis, ratione neque deleniti eum, mollitia a! Mollitia eveniet delectus ad nemo voluptates dignissimos nisi excepturi impedit nam illum provident, sunt voluptatem eius nobis quo facere maiores. Nihil ab aliquid velit voluptates tenetur molestiae dolores quisquam. Neque doloribus ea dignissimos? Dicta, in! Architecto quibusdam asperiores aliquam illum corporis doloribus aut nostrum. Dolores consectetur expedita aliquam cum quis quo iste velit dolorum cumque omnis, amet earum commodi reprehenderit quasi laborum, asperiores modi. Qui fugit quae ipsam, doloremque, odio dolore reprehenderit, sint dignissimos repellat consectetur est. Consectetur accusantium eaque nemo ut illum optio fugit reprehenderit qui vel quia minus, ullam quis aspernatur quidem atque nam? Perferendis quam tempora eum magnam rerum soluta eveniet officiis temporibus. Corporis atque minima quas nulla unde doloremque incidunt animi, quae reiciendis vel cum deserunt distinctio laborum vero dolores quis nemo est dolore doloribus, ipsam laudantium! Tempora ducimus consectetur sunt esse quod ad in asperiores, eveniet mollitia placeat quidem hic quasi illum dignissimos tempore iste, natus quia optio consequuntur molestias libero. Voluptas mollitia illo maxime doloribus, tenetur tempore fugiat maiores inventore quos eius et nobis dolorum ipsum minima debitis officiis! Atque eveniet amet iusto vitae doloribus dolores laborum libero, cumque et quidem. Maiores quae est similique velit tempore id, dolor sed voluptatibus laudantium vel ab ullam! Animi labore quia consectetur temporibus, sint nesciunt ipsum incidunt consequuntur eligendi dolore blanditiis. Quasi nesciunt magni dolorem itaque doloribus. Soluta vel maiores repellendus fugit illo! Temporibus nostrum est iure hic molestias beatae rerum dolore voluptatum eum, atque deleniti alias commodi minima nesciunt sed adipisci facilis vero officia earum molestiae minus eveniet tenetur placeat cupiditate? Eum facilis, dolores maxime aliquid officiis distinctio fugit quas odio nam molestiae ad incidunt expedita nemo in maiores magnam dolorem impedit sunt? Iste nobis reprehenderit dolorem doloremque quisquam. Itaque excepturi molestias, veniam eveniet consectetur voluptatum! Vel reiciendis tempora quam recusandae accusamus quisquam, qui consectetur, libero quibusdam nisi ducimus rem sed nam obcaecati suscipit molestias eaque quia neque, ipsa odit culpa? Beatae quia cumque id sit nisi alias officiis explicabo veritatis debitis quam repellendus magnam reiciendis, atque dolorum enim delectus architecto fugiat. Nulla explicabo neque commodi dolore incidunt molestias distinctio consequatur aspernatur, earum nisi, ex perspiciatis ad dolores quasi vero, repellat voluptatibus! Mollitia eligendi iste error unde voluptatibus eius facilis quisquam neque! Eligendi dolore cum corporis? Suscipit, necessitatibus.
                        </>} />
                        <Route path='/add-employee' element={<>addEmployee</>} />
                        <Route path='/employee-details' element={<EmployeeDetails/>} />
                    </Routes>
                </div>

            </div>
        </div>
    )
}

function Dashboard404() {
    useEffect(() => {

    })
    return (
        <div className='container'>
            You are on wrong route , be real okay
        </div>
    )
}