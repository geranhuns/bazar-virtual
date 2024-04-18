'use client'
// import { useNavigation } from 'next/navigation';
// import { useEffect, useState } from 'react';
// import { getMarcaById } from '../../services/marcas';
// import { getProductsByMarca } from '../../services/products';

import { useParams } from "next/navigation";

export default function MarcaPage() {
    const { id } = useParams();
    // const navigation = useNavigation();
    // const { id } = navigation.query; // usamos 
    // const [marca, setMarca] = useState(null);
    // const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     if (id) {
    //         const fetchData = async () => {
    //             const marcaData = await getMarcaById(id);
    //             const productsData = await getProductsByMarca(id);
    //             setMarca(marcaData);
    //             setProducts(productsData);
    //         };
    //         fetchData();
    //     }
    // }, [id]);

    return (
        <div>
            {/* {marca && <h1>{marca.name}</h1>}
            <ul>
                {products.map((product) => (
                    <li key={product.id}>{product.name}</li>
                ))}
            </ul> */}
            <h1 className="">{`Marcas [id] = ${id}`}</h1>
            <main className="container mx-auto max-w-7xl p-4">
                <section className="grid grid-cols-2 justify-center items-center gap-12 mb-8">
                    <img src="https://via.placeholder.com/150" alt="Logo de la marca" className="rounded-full ml-auto" />
                    <div>
                        <h2 className="font-bold">Nombre de la marca</h2>
                        <p className="mb-3">Descripción de la marca</p>

                        <div className="flex gap-2">
                            <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center hover:cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30" className="fill-current text-blue-600 w-8 h-8">
                                    <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"></path>
                                </svg>
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center hover:cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48" className="w-8 h-8">
                                    <radialGradient id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fd5"></stop><stop offset=".328" stop-color="#ff543f"></stop><stop offset=".348" stop-color="#fc5245"></stop><stop offset=".504" stop-color="#e64771"></stop><stop offset=".643" stop-color="#d53e91"></stop><stop offset=".761" stop-color="#cc39a4"></stop><stop offset=".841" stop-color="#c837ab"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><radialGradient id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4168c9"></stop><stop offset=".999" stop-color="#4168c9" stop-opacity="0"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"></path><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"></path>
                                </svg>
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center hover:cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48" className="w-8 h-8">
                                    <path fill="#212121" fill-rule="evenodd" d="M38,42H10c-2.209,0-4-1.791-4-4V10c0-2.209,1.791-4,4-4h28	c2.209,0,4,1.791,4,4v28C42,40.209,40.209,42,38,42z" clip-rule="evenodd"></path><path fill="#fff" d="M34.257,34h-6.437L13.829,14h6.437L34.257,34z M28.587,32.304h2.563L19.499,15.696h-2.563 L28.587,32.304z"></path><polygon fill="#fff" points="15.866,34 23.069,25.656 22.127,24.407 13.823,34"></polygon><polygon fill="#fff" points="24.45,21.721 25.355,23.01 33.136,14 31.136,14"></polygon>
                                </svg>
                            </a>
                        </div>
                    </div>
                </section>

                <section>
                    <h3 className="text-center text-2xl font-bold mb-5">Productos</h3>
                    <ul className="grid grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
                        <li className="gap-4 mb-6">
                            <a>
                                <img src="https://loremflickr.com/320/240" className="rounded-lg mx-auto hover:cursor-pointer drop-shadow-lg" alt="Producto 1" />
                            </a>
                        </li>
                        <li>
                            <a>
                                <img src="https://loremflickr.com/320/240" className="rounded-lg mx-auto hover:cursor-pointer drop-shadow-lg" alt="Producto 1" />
                            </a>
                        </li>
                        <li>
                            <a>
                                <img src="https://picsum.photos/320/240" className="rounded-lg mx-auto hover:cursor-pointer drop-shadow-lg" alt="Producto 1" />
                            </a>
                        </li>
                        <li>
                            <a>
                                <img src="https://picsum.photos/320/240" className="rounded-lg mx-auto hover:cursor-pointer drop-shadow-lg" alt="Producto 1" />
                            </a>
                        </li>
                        <li>
                            <a>
                                <img src="https://picsum.photos/320/240" className="rounded-lg mx-auto hover:cursor-pointer drop-shadow-lg" alt="Producto 1" />
                            </a>
                        </li>
                    </ul>
                </section>
            </main>

        </div >
    );
}


