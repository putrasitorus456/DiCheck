import * as React from "react";
import Link from "next/link";
import Button1 from "@/components/Button/button1";

function Article({ date, title, content, images, authorImage, author }) {
    return (
        <article className="flex flex-col px-12 mt-8 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <h1 style={{ fontFamily: 'Montserrat-Bold' }} className="text-4xl font-bold text-gray-600 leading-[54.12px] max-md:max-w-full">{title}</h1>
            <div className="mt-9 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    {images.map((src, index) => (
                        <div key={index} className={`flex flex-col ${index !== 0 ? 'ml-5' : ''} w-[33%] max-md:ml-0 max-md:w-full`}>
                            <img loading="lazy" src={src} alt="" className="w-full aspect-[1.49] max-md:mt-9 max-md:max-w-full" />
                        </div>
                    ))}
                </div>
                <div className="flex flex-col grow text-base font-bold tracking-normal leading-6 text-stone-700 max-md:mt-9 max-md:max-w-full">
                    <div className="flex gap-5 mt-8 max-md:flex-wrap">
                        <img loading="lazy" src={authorImage} alt={`${author}`} className="shrink-0 aspect-square w-[50px]" />
                        <div style={{ fontFamily: 'Montserrat-Bold', fontSize: '20px' }} className="flex-1 my-auto">{author}</div>
                    </div>
                </div>
            </div>
            <time style={{ fontFamily: 'Montserrat-Bold', fontSize: '15px' }} className="mt-7 text-base font-medium leading-4 text-neutral-800 text-opacity-60 max-md:max-w-full">{date}</time>
            <section className="mt-8 text-lg font-medium leading-6 max-md:mr-1.5 max-md:max-w-full">
                {content.map((block, index) => {
                    if (typeof block === "string") {
                        return <p key={index} style={{ fontFamily: 'Montserrat-Medium', fontSize: '15px' }} className="text-stone-500 mb-4">{block}</p>;
                    }
                    if (block.type === "heading") {
                        return <h2 key={index} style={{ fontFamily: 'Montserrat-Bold', fontSize: '30px' }} className="text-2xl text-gray-600 font-bold mt-8 mb-8">{block.content}</h2>;
                    }
                    if (block.type === "list") {
                        return (
                            <div key={index} className="mb-4">
                                {block.items.map((item, itemIndex) => (
                                    <div key={itemIndex} className="mb-5">
                                        <h3 style={{ fontFamily: 'Montserrat-Bold', fontSize: '18px' }} className="text-gray-600 font-bold">{item.title}</h3>
                                        <p style={{ fontFamily: 'Montserrat-Medium', fontSize: '15px' }} className="mt-2 text-stone-500">{item.content}</p>
                                    </div>
                                ))}
                            </div>
                        );
                    }
                    return null;
                })}
            </section>
        </article>
    );
}

export default function MyComponent() {
    const articleContent = [
        "Vaksinasi adalah salah satu intervensi kesehatan masyarakat yang paling efektif dan penting dalam sejarah medis. Dengan adanya vaksinasi, banyak penyakit menular yang dulunya mematikan kini dapat dicegah dan dikendalikan. Contoh nyata dari keberhasilan vaksinasi adalah pemberantasan cacar di seluruh dunia dan pengurangan drastis kasus polio. Vaksin bekerja dengan cara merangsang sistem kekebalan tubuh untuk mengenali dan melawan patogen tertentu, tanpa menyebabkan penyakit itu sendiri.",
        "Pentingnya vaksinasi semakin terasa di tengah pandemi global dan wabah penyakit yang terus bermunculan. Vaksin tidak hanya melindungi individu yang divaksinasi, tetapi juga melindungi masyarakat luas dengan mengurangi penyebaran penyakit. Ini dikenal sebagai kekebalan kelompok, yang terjadi ketika sejumlah besar populasi menjadi kebal terhadap penyakit, sehingga penyebaran penyakit tersebut menjadi tidak mungkin atau sangat terbatas.",
        { type: "heading", content: "Pentingnya Melakukan Vaksinasi" },
        {
            type: "list",
            items: [
                { title: "1. Mencegah Penyakit Menular", content: "Vaksinasi adalah cara paling efektif untuk mencegah penyakit menular seperti campak, polio, dan hepatitis. Dengan mendapatkan vaksinasi, kita dapat menghindari infeksi dan komplikasi serius yang ditimbulkan oleh penyakit-penyakit ini." },
                { title: "2. Melindungi Orang yang Rentan", content: "Vaksinasi membantu melindungi kelompok yang rentan seperti bayi, lansia, dan orang dengan sistem kekebalan yang lemah. Orang-orang ini mungkin tidak dapat divaksinasi atau mungkin tidak dapat membangun kekebalan yang cukup bahkan setelah divaksinasi." },
                { title: "3. Mengurangi Beban Kesehatan", content: "Penyakit menular dapat menyebabkan beban besar pada sistem kesehatan dengan meningkatnya kebutuhan akan perawatan medis, rawat inap, dan pengobatan. Vaksinasi dapat mengurangi jumlah kasus penyakit dan mengurangi tekanan pada layanan kesehatan." },
                { title: "4. Mencegah Epidemi dan Pandemi", content: "Dengan cakupan vaksinasi yang luas, kemungkinan terjadinya wabah besar atau pandemi dapat diminimalisir. Ini penting untuk menjaga stabilitas sosial dan ekonomi serta kesehatan masyarakat secara keseluruhan." },
                { title: "5. Menjaga Produktivitas Ekonomi", content: "Penyakit yang dapat dicegah dengan vaksin sering kali menyebabkan absensi kerja dan penurunan produktivitas. Dengan menjaga populasi yang sehat, vaksinasi membantu mempertahankan tenaga kerja yang produktif dan mengurangi kerugian ekonomi akibat penyakit." },
                { title: "6. Memastikan Keamanan Perjalanan Internasional", content: "Banyak negara memerlukan vaksinasi tertentu untuk wisatawan agar mencegah penyebaran penyakit menular lintas negara. Vaksinasi membantu memastikan keamanan kesehatan global dan kelancaran perjalanan internasional." }
            ]
        },
        { type: "heading", content: "Penutup" },
        "Vaksinasi adalah investasi kesehatan yang memberikan manfaat jangka panjang bagi individu dan masyarakat. Dengan mencegah penyakit menular, vaksinasi tidak hanya menyelamatkan nyawa tetapi juga mengurangi beban ekonomi dan sosial yang ditimbulkan oleh penyakit. Keberhasilan vaksinasi bergantung pada partisipasi luas masyarakat. Oleh karena itu, penting bagi setiap orang untuk mengikuti program vaksinasi yang direkomendasikan oleh otoritas kesehatan.",
        "Selain melindungi diri sendiri, vaksinasi juga merupakan tindakan solidaritas sosial. Dengan divaksinasi, kita melindungi mereka yang tidak dapat divaksinasi atau yang memiliki kekebalan tubuh yang lemah. Kekebalan kelompok hanya dapat tercapai jika sebagian besar populasi kebal terhadap penyakit, sehingga penyebaran penyakit dapat dikendalikan atau dihentikan.",
        "Secara keseluruhan, vaksinasi memainkan peran penting dalam menjaga kesehatan global. Dalam menghadapi ancaman penyakit menular, vaksinasi adalah salah satu alat paling ampuh yang kita miliki. Oleh karena itu, mari kita dukung program vaksinasi dan pastikan diri kita serta orang-orang terdekat mendapatkan vaksin yang diperlukan untuk melindungi kesehatan kita semua."
    ];

    return (
        <div className="flex flex-col pb-3 bg-white">
            <div style={{ fontFamily: 'Montserrat-Bold', fontSize: '20px' }} className="flex justify-end pl-20 py-9 w-full font-bold whitespace-nowrap bg-white max-w-full max-md:px-5 max-md:max-w-full">
                <div className="flex gap-5 justify-between w-full max-w-full max-md:flex-wrap max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-wrap max-md:max-w-full">
                    <Link href="/">
                        <div className="flex-auto text-3xl tracking-normal leading-8 text-slate-800 mr-10">
                            DiCheck
                        </div>
                    </Link>
                        <div className="flex flex-auto gap-10 justify-start self-start text-sm tracking-wide leading-6 text-center text-neutral-500">
                            <Link href="/homepage"> <button className="justify-center py-2">Home</button> </Link>
                            <Link href="/check-disease"> <button className="justify-center px-1.5 py-2">Check</button> </Link>
                            <Link href="/articles"> <button className="justify-center py-2">Articles</button> </Link>
                        </div>
                    </div>
                    <div className="mr-40">
                        <Link href="/check-disease">
                            <Button1>
                                Check now
                            </Button1>
                        </Link>
                    </div>
                </div>
            </div>
            <main>
                <Article
                    date="14 November 2023"
                    title="Pentingnya Vaksinasi dalam Mencegah Penyakit Menular"
                    images={[
                        "/images/vaksin_1.png",
                        "/images/vaksin_2.png",
                        "/images/vaksin_3.png",
                    ]}
                    authorImage="/images/logo_admin.png"
                    author="Dicheck Admin"
                    content={articleContent}
                />
            </main>
        </div>
    );
}
