import React, {useState} from 'react';
import classes from './Introduction.module.css';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Namecard from './Namecard/Namecard';
import Movies from './Movies/Movies';
import PDFViewer from 'mgr-pdf-viewer-react'

const Introduction = () => {
    const [Click, setClick] = useState(false);

    const onClickHandler = () => {
        setClick(true);
    }

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
      }
      const [numPages, setNumPages] = useState(null);
      const [pageNumber, setPageNumber] = useState(1);

    return (
        <div className={classes.intro_pane}>
             {Click ?  
                     
                     null
              
                    : <Aux>
                      <Namecard click = {onClickHandler}/> 
                      <Movies/>
                      </Aux>}
        </div>
        
           
        
    );

}

export default Introduction;