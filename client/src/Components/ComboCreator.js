import React, { useState } from 'react'

export default function ComboCreator() {
    const [ selectedFile, setSelectedFile ] = useState(null);
    const [ videoPreviewUrl, setVideoPreviewUrl ] = useState(null);
    const [ currentTime, setCurrentTime ] = useState(0);
    const [ comboInputs, setComboInputs ] = useState('')

    const timeRef = React.createRef()
    const fileSelectedHandler = (e) => {
        let file = e.target.files[0];
        let blobURL = URL.createObjectURL(file);
        this.setState({
            selectedFile: file,
            videoPreviewUrl: blobURL
        })
    }
    const getTime = () => {
        let currentTime = timeRef.current.currentTime
        setCurrentTime(currentTime)
    }

    return (
        <div>
            
        </div>
    )
    
}
