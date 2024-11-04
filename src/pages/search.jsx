import axios from "axios";
import React, { useState } from "react";

function Search() {
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [bytecode, setBytecode] = useState(null);
  const [result, setResult] = useState([])
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
    axios.post(`http://localhost:8012/ocr`, image, {withCredentials : true})
    .then((resp)=>{
      setResult(resp.data?.ocr_result)
      console.log(result)
    }).catch((error)=>{console.log(error)})
  };

  const handleWebCam = () => {
    // 프론트에서 캡쳐 코드 >> 결과 이미지를 ocr api로 요청 
    // handleImageChange와 동일한 데이터 양식으로 요청 보내기
    // axios.post(`http://localhost:8012/ocr`, image, {withCredentials : true})
    // .then((resp)=>{
    //   setResult(resp.data?.ocr_result)
    //   console.log(result)
    // }).catch((error)=>{console.log(error)})
  }

  // 1. 프론트에서 화면 일부분 캡쳐 기능 구현
  // 2. 데이터 변환을 해서 ocr api로 전송하기
  // 3. 응답을 받아서 프론트에서 결과 보여주기
  // 4. git에 올려서 확인

  // +다 되면 추가 기능 구현
  // 1. 웹캠에 접근해서 캡쳐 기능 구현
  // 2. 위와 동일


  return (
    <div style={{ textAlign: "center" }}>
        <div style={{display : "flex"}}>
            <label htmlFor="uploadimg" style={{width : "48px", height : "48px", borderRadius : "48px", backgroundColor : "#66cdaa", whiteSpace : "nowrap", display : "flex", alignItems : "center", justifyContent : "center", color : "white"}}>업로드</label>
            <input type="file" accept="image/*" onChange={handleImageChange} style={{display : "none", width : "0px", height : "0px"}} id="uploadimg"/>
            <div style={{width : "48px", height : "48px", borderRadius : "48px", backgroundColor : "#66cdaa", whiteSpace : "nowrap", display : "flex", alignItems : "center", justifyContent : "center", color : "white"}} onClick={handleWebCam}>캡쳐</div>
        </div>
        {previewUrl && (
          <div style={{ marginTop: "20px" }}>
            <img
              src={previewUrl}
              alt="미리보기 이미지"
              style={{ width: "100%", height: "auto", borderRadius: "8px" }}
            />
          </div>
        )}
    </div>
  );
}

export default Search