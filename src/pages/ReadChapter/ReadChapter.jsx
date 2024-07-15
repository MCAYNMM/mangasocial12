import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ButtonIcon from "../../components/buttonIcon";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import { useSelector } from "react-redux";
import { Button } from "antd";
import fileDownload from "js-file-download";
import FileSaver from "file-saver";
import Loading from "../../components/Loading/Loading";
import LoadingWhite from "../../components/Loading/LoadingWhite";
import { key } from "localforage";


const ReadChapter = () => {
  const params = useParams();
  const { slug, id } = params;
  const [chapterDetail, setChapterDetail] = useState([]);
  const [listChapter, setListChapter] = useState([]);
  const [listNameChapter, setListNameChapter] = useState([]);

  const [chooseChapter, setChooseChapter] = useState("");
  const [loading, setLoading] = useState(true);

  const sv = useSelector((state) => state.server.sv);
  const readmode = useSelector((state) => state.ReadMode.readmode);
  const navigate = useNavigate();
  const fetchChapter = async () => {
    try {
      
      if (readmode) {
        const response = await axios.get(
          `https://apimanga.mangasocial.online/web/rmanga/${sv}/${slug}/${id}`
        );

        setChapterDetail(response.data);
        setLoading(false);
        // console.log(response.data);
       }
      else {
         const response = await axios.get(
          `https://apimanga.mangasocial.online/rmanga/${slug}/${id}`
        );

        setChapterDetail(response.data);
        setLoading(false);
        // console.log(response.data);
      }
      
    } catch (error) {
      console.log("error", error);
    }
  };

// const downloadImages = async () => {
//     const zip = new JSZip();
// const  imageUrls = chapterDetail.image_chapter
//     for (const url of imageUrls) {
//       try {
//         const response = await axios.get(url);
//         const fileName = url.split('/').pop(); // Lấy tên file từ đường link
//         zip.file(fileName, response.data);
//       } catch (error) {
//         console.error(`Error downloading image ${url}`, error);
//       }
//     }

//     const content = await zip.generateAsync({ type: 'blob' });
//     saveAs(content, 'comic.zip');
// };
  
  const handleDownloadHTML = () => {
     const { image_chapter, title, chapter_title } = chapterDetail;
   
   if (image_chapter && image_chapter.length > 0) {
     const htmlContent =
       ` <!DOCTYPE html>
     <html lang="en">
     <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${title} - ${chapter_title}</title>
     </head>
     <body>
      <div style="
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
" >
      <h1>${title} - ${chapter_title}</h1>
      ${image_chapter && image_chapter.length > 0 && image_chapter.map(
         (imageUrl, index) => `<img src="${imageUrl}" alt="Image ${index + 1}"/>`
       )
         .join("\n")}</div>

     </body>
     </html>`
    
     const htmlBlob = new Blob([htmlContent], { type: "text/html" });
     const htmlUrl = URL.createObjectURL(htmlBlob);
     const downloadLink = document.createElement("a");
     downloadLink.href = htmlUrl;
     downloadLink.download = ` ${title}-${chapter_title}.html`;
     document.body.appendChild(downloadLink);
     downloadLink.click();

     document.body.removeChild(downloadLink);
     URL.revokeObjectURL(htmlUrl);
   }
   else { 
     alert("Please wait for the image to finish downloading and try again")
   }
  } 


    
  
  
  const handleDownload = () => {
    console.log(chapterDetail.image_chapter.length);
    console.log(chapterDetail.image_chapter[0]);
    FileSaver.saveAs(
      "https://genk.mediacdn.vn/139269124445442048/2023/12/6/naruto-12-6715-1701839896154-17018398969662010034558.jpg",
      "image.png"
    );
    // downloadIMG("https://genk.mediacdn.vn/139269124445442048/2023/12/6/naruto-12-6715-1701839896154-17018398969662010034558.jpg",chapterDetail.chapter_name+".jpg")
    // for(let i=0;i<chapterDetail.image_chapter.length;i++){
    //   setTimeout(
    //     ()=>{
    //       // fileDownload(chapterDetail.image_chapter[i],"img_"+i+".png")

    //     },
    //     i*200
    //   )
    // }
  };
  const fetchListChapter = async () => {
    try {
     
      if (readmode) { const response = await axios.get(
          `https://apimanga.mangasocial.online/web/rmanga/${sv}/${slug}/`
        );
      // console.log("check rs", response.data.chapters);
       const test = readmode
    ? Object.fromEntries(
        Object.entries(response.data.chapters || {}).sort((a, b) => {
         const numA = a[1].includes("chapter-") ? a[1]?.match(/chapter-([\d.]+)/)[1]?.split('.')?.map(Number) : a[1].match(/(\d+)\/$/)[1] || "";
      const numB =b[1].includes("chapter-") ? b[1]?.match(/chapter-([\d.]+)/)[1]?.split('.')?.map(Number) :b[1].match(/(\d+)\/$/)[1] || "";
     
      const numA2 = a[1].includes("chapter_") ? a[1]?.match(/chapter_([\d.]+)/)[1]?.split('.')?.map(Number) : a[1].match(/(\d+)\/$/)[1] || "";
      const numB2 = b[1].includes("chapter_") ? b[1]?.match(/chapter_([\d.]+)/)[1]?.split('.')?.map(Number):b[1].match(/(\d+)\/$/)[1] || "";
    
      
      // const chapterA = a[1].includes("chapter-")? parseInt( numA ) : parseInt( a[1].match(/(\d+)\/$/)[1])
      //     const chapterB =  b[1].includes("chapter-")? parseInt( numB ) : parseInt( b[1].match(/(\d+)\/$/)[1])
      const chapterA = parseInt(a[1].includes("chapter-")?numA:numA2);
          const chapterB = parseInt(b[1].includes("chapter-")?numB:numB2);
      return chapterA - chapterB;
        })
      )
    : {};
        const arrValues = Object.values(test)
        console.log("check value", arrValues);
        const arrKeys = Object.keys(test)
     const getChapterFromUrl = (url) => {
    const parts = url.split('/');
    return parts[parts.length - 2];
  };
      setListNameChapter(arrKeys)
      

      // console.log("check key val",getChapterFromUrl(keys[0]) );
        const values = arrValues.map((item) => getChapterFromUrl(item)
        )
        setListChapter(values);
        // console.log(values);
      }
      else { 
        const response = await axios.get(
          `https://apimanga.mangasocial.online/rmanga/${slug}`
        );
      console.log("check rs", response.data.chapters);
      
        const getChapterFromUrl = (url) => {
    const parts = url.split('/');
    return parts[parts.length - 1];
      };
      
       const arrValues = response.data.chapters.sort((a, b) => {
        const chapterA = parseFloat(
          a.includes("chapter")
            ? a.includes("novel")
              ? a.match(/chapter-([\d.]+)/)
              : a.match(/chapter-([\d.]+)/)[1]
            : getChapterFromUrl(a)
        );
        const chapterB = parseFloat(
          b.includes("chapter")
            ? b.includes("novel")
              ? b.match(/chapter-([\d.]+)/)
              : b.match(/chapter-([\d.]+)/)[1]
            : getChapterFromUrl(b)
        );
        return chapterA - chapterB;
      });



    

      // console.log("check key val",getChapterFromUrl(keys[0]) );
      const values = arrValues.map((item) => getChapterFromUrl(item))
        setListChapter(values);
        setListNameChapter(values)
        console.log(values); 
      }
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchListChapter();
    fetchChapter();
    // eslint-disable-next-line
  }, [slug]);

  useEffect(() => {
    fetchChapter();
    fetchListChapter();
    // eslint-disable-next-line
  }, [slug, id]);

  const handleChapter = (e) => {
    
    if (readmode) { 
        let selectChapter = document.getElementById("chapterList");
      let selectedChapter =
        selectChapter.options[selectChapter.selectedIndex].value;
      console.log(selectedChapter);
      setChooseChapter(e.target.value);
      const linkChapter = selectedChapter.replace(
        `http://apimanga.mangasocial.online/web/rmanga/${sv}/${slug}/`,
        ""
      );
      navigate(`/${sv}/chapter/${slug}/${linkChapter}`);
    }
    else {  let selectChapter = document.getElementById("chapterList");
      let selectedChapter =
        selectChapter.options[selectChapter.selectedIndex].value;
      console.log(selectedChapter);
      setChooseChapter(e.target.value);
      const linkChapter = selectedChapter.replace(
        `http://apimanga.mangasocial.online/rmanga/${slug}/`,
        ""
      );
      navigate(`/${sv}/chapter/${slug}/${linkChapter}`); }
    
  };

  let currentChapter = listChapter.indexOf(id);
  // console.log(currentChapter);

  const prevChapter = () => {
    if (currentChapter > 0) {
      if (readmode) { 
 const prev = listChapter[currentChapter - 1].replace(
        `http://apimanga.mangasocial.online/web/rmanga/${sv}/${slug}/`,
        ""
      );
      currentChapter--;
      navigate(`/${sv}/chapter/${slug}/${prev}`);
      setChooseChapter(prev);
      console.log(currentChapter);
      }
      else {
        const prev = listChapter[currentChapter - 1].replace(
        `http://apimanga.mangasocial.online/rmanga/${slug}/`,
        ""
      );
      currentChapter--;
      navigate(`/${sv}/chapter/${slug}/${prev}`);
      setChooseChapter(prev);
      console.log(currentChapter);
       }
    } else {
      alert("What!!???");
    }
  };

  const nextChap = () => {
    if (currentChapter + 2 <= listChapter.length) {
      if (readmode) { 
         const next = listChapter[currentChapter + 1];
      setLoading(true);
      navigate(`/${sv}/chapter/${slug}/${next}/`);
      setChooseChapter(next);
      // console.log(slug, next);
      }
      else { 
        const next = listChapter[currentChapter + 1];
      setLoading(true);
      navigate(`/${sv}/chapter/${slug}/${next}/`);
      setChooseChapter(next);
      // console.log(slug, next);
      }
    } else {
      alert("End of manga!!!");
    }
  };

  return (
    <div className="flex flex-col items-center gap-5 mt-5">
      <div className="flex flex-col container gap-5">
        <div className="">
          <h1 className="uppercase font-bold text-3xl">
            {chapterDetail?.title} - {readmode ? chapterDetail?.chapter_title: chapterDetail?.chapter_name}
          </h1>
        </div>

        <div className="flex gap-3 text-lg ">
          <Link to={`/`}>Home</Link> /{" "}
          <Link to={`/${sv}/chapter/${slug}`}>{chapterDetail?.title}</Link> /{" "}
          <label htmlFor="chapter name" className="font-bold">
            {chapterDetail?.chapter_name}
          </label>
        </div>

        <div className="flex justify-between items-center">
          <div className="">
            <select
              name="cars"
              id="chapterList"
              className="w-[450px] h-[40px] px-3 rounded-lg"
              onChange={(e) => handleChapter(e)}
              value={id}
            >
             
              {listChapter?.map((item, index) => (
                <option key={index} value={item}>
                  {readmode? listNameChapter[index] :`Chapter_${index+1}`}
                </option>
              ))}
            </select>
          </div>
          <div>
            <Button size="large" onClick={() => handleDownloadHTML(chapterDetail)}>
             Download
            </Button>
          </div>
          <div className="flex gap-2">
            <ButtonIcon
              name={"Prev"}
              iconLeft={<GrLinkPrevious />}
              handleClick={prevChapter}
            />
            <ButtonIcon
              name={"Next"}
              iconRight={<GrLinkNext />}
              handleClick={nextChap}
            />
          </div>
        </div>
      </div>
      {/* IMAGE CHAPTER */}
      {loading ? (
        <LoadingWhite
          type={"spin"}
          color={"#FF9F66"}
          height={300}
          width={300}
          text="Loading Data"
        />
      ) : (
        <div className="flex flex-col items-center justify-center  ">
          {chapterDetail.image_chapter?.map((item, index) => (
            <div key={index}>
              <img
                src={item}
                alt=""
                className="h-[100%] w-[100%] bg-cover object-cover mt-2 "
              />
              <hr />
            </div>
          ))}
        </div>
      )}

      <div className="flex flex-col container gap-5">
        <div className="flex justify-between items-center ">
          <div className="">
            <select
              name="cars"
              id="chapterList"
              className="w-[450px] h-[40px] px-3 rounded-lg"
              onChange={() => handleChapter()}
              value={id}
            >
              
              <option >
                  Select Chapter
                </option>
              {listChapter?.map((item, index) => (
                <option key={index} value={item}>
                  {readmode? listNameChapter[index] :`Chapter_${index+1}`}
                </option>
              ))}
            </select>
          </div>

          <div className="flex gap-2">
            <ButtonIcon
              name={"Prev"}
              iconLeft={<GrLinkPrevious />}
              handleClick={prevChapter}
            />
            <ButtonIcon
              name={"Next"}
              iconRight={<GrLinkNext />}
              handleClick={nextChap}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadChapter;