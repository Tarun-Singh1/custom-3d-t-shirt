import React from 'react';
import CustomButton from './CustomButton';

const AIPicker = ({ prompt, setPrompt, generatingImg }) => {
  const handleUnavailableFeature = () => {
    alert("This feature is temporarily not available");
  };

  return (
    <div className="aipicker-container">
      <textarea 
        placeholder="Ask AI..."
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="aipicker-textarea"
      />
      <div className="flex flex-wrap gap-3">
        {generatingImg ? (
          <CustomButton 
            type="outline"
            title="Asking AI..."
            customStyles="text-xs"
          />
        ) : (
          <>
            <CustomButton 
              type="filled"
              title="AI Logo"
              handleClick={handleUnavailableFeature}
              customStyles="text-xs"
            />

            <CustomButton 
              type="filled"
              title="AI Full"
              handleClick={handleUnavailableFeature}
              customStyles="text-xs"
            />
          </>
        )}
      </div>
    </div>
  );
}

export default AIPicker;
