import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SourceIcon from '@mui/icons-material/Source';

function Footer() {
  return (
    <footer className="w-full py-6 px-4 border-t border-dashed border-gray-700">
      <div className="font-mono w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-lg font-semibold mb-1">Jeevika Sirwani</h1>
          <p className="text-sm text-violet-200">jeevika.sirwani4@gmail.com</p>
        </div>
        
        <div className="flex items-center gap-4">
          <a 
            href="https://github.com/jeevikasirwani" 
            target="_blank" 
            // rel="noopener noreferrer"
            className="text-gray-300 hover:text-violet-300 transition-colors"
            aria-label="GitHub Profile"
          >
            <GitHubIcon />
            <span className="text-sm text-violet-200">Github</span>
          </a>
          <a 
            href="https://drive.google.com/file/d/1te2Hc7sPEWSHXoylP-HkbFturFdyYlzi/view?usp=drive_link" 
            target="_blank" 
            // rel="noopener noreferrer"
            className="text-gray-300 hover:text-violet-300 transition-colors"
            aria-label="Resume"
          >
            <SourceIcon />
            <span className="text-sm text-violet-200">Resume</span>
          </a>
          <a 
          
            href="https://www.linkedin.com/in/jeevika-sirwani-51a776212/" 
            target="_blank" 
            // rel="noopener noreferrer"
            className="text-gray-300 hover:text-violet-300  transition-colors"
            aria-label="LinkedIn Profile"
          >
            <LinkedInIcon />
            <span className="text-sm text-violet-200">LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;