import axios from 'axios'
import html2pdf from 'html2pdf.js'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import pdfdata from '../data/pdf.json'
function ReadNow() {
    const [reading, setReading] = useState([])
    const { id } = useParams()
    const getuser = () => {
        axios.get("https://potterapi-fedeperin.vercel.app/en/books")
            .then((response) => {
                console.log("tanu", response.data)
                setReading(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    const [data, setData] = useState()
    useEffect(() => {
        getuser()

    }, [id])
    useEffect(() => {
        const singledata = reading?.find((item) => item.number == id)
        setData(singledata)
    }, [id, reading])
    const downloadpdf = () => {
        var element = document.getElementById('element-to-print');
        var opt = {
            margin: 1,
            filename: 'myfile.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };

        // New Promise-based usage:
        html2pdf().from(element).set(opt).save();

        // Old monolithic-style usage:
        html2pdf(element, opt);
    }

    const [pdata, setPData] = useState()
    
    useEffect(() => {
        const singledata = pdfdata.pdfdata?.find((item) => item.bookid == id)
        setPData(singledata)
    }, [id, pdfdata.pdfdata])
    const onButtonClick = (e) => {
        const pdfUrl = pdata?.pdflink;
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "document.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <>
        {JSON.stringify(pdata?.pdflink)}
            {console.log(reading, 'reading')}
            {console.log(data, 'data')}
            <div className="container ">
                <div className="row">
                    <div className="col-4 d-flex justify-content-center align-items-center">
                        <img src={data?.cover} alt="" />
                    </div>
                    <div className="col-8">
                        <h4 className="title">
                            {data?.originalTitle}
                        </h4>
                        <div className="discription">
                            {data?.description}
                        </div>
                        <h5 className="discription">
                            Pages : {data?.pages}
                        </h5>
                        <h6 className="discription">
                            Released At : {data?.releaseDate}
                        </h6>

                        <div className="div my-2" id='element-to-print'>

                            <iframe src={pdata?.pdflink} frameborder="0"></iframe>
                           </div>
                           {/* <div>
                            <iframe src={pdf2} frameborder="0"></iframe>

                        </div> */}
                        <button className='btn btn-danger  ' onClick={onButtonClick}>Downoad Now</button>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ReadNow;