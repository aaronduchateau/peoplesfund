import React from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";

const ImageUpload = (props: {campaignImage: (campaignImage: any) => void}) => {
  const [images, setImages] = React.useState([]);
  const maxNumber = 1;

  const onChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    props.campaignImage(imageList);
    setImages(imageList as never[]);
  };

  return (
    <div className="" style={{width: '100%'}}>
      <ImageUploading
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps
        }) => (
          // write your building UI
          <div className="grid justify-items-center ">
            <div className="grid grid-cols-2 gap-4">
                {imageList.length == 0 && 
                        <img src={'./image-sample.png'}/>

                    }
                    {imageList.map((image, index) => (
                    <div key={index} className="image-item">
                        <img src={image.dataURL} alt="" />
                        <div className="image-item__btn-wrapper">
                        <button onClick={() => onImageUpdate(index)}>Update</button>
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={() => onImageRemove(index)}>Remove</button>
                        </div>
                    </div>
                ))}
                <button
                    style={isDragging ? { color: "red" } : undefined}
                    onClick={onImageUpload}
                    className="img-drag-button"
                    {...dragProps}
                >
                Add Campaign Photo <br />
                <span style={{fontSize: '10px'}}>(Click or Drop Files Here)</span>
                </button>
            </div>  
          </div>
        )}
      </ImageUploading>
    </div>
  );
}

export default ImageUpload;
