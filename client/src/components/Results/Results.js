import React , {Component} from "react";
import "./Results.css";



class Results extends Component {

    render() {
        return(
    <div className="row">
      <div className="col-s-12">
        
  
        <div className="card">
         
          <div className="card-header">
            <strong>
               Results
            </strong>
          </div>
  
          <div className="card-body" id="article-section">
            {this.props.result.map((headlines, index) => 
              <div key={index} className="alert alert-warning" role="alert">
                {headlines.headline.print_headline ?
                  <a href={headlines.web_url} target="_blank">{headlines.headline.print_headline}</a>
                  :
                  <a href={headlines.web_url} target="_blank">{headlines.headline.main}</a>
                }
                <button type="button" id={index} onClick={() => this.props.saveButton(index)} className="float-right btn btn-primary">Save</button>
              </div>
            )}
          </div>
  
        </div>
  
      </div>
    </div>
 );
}
}

export default Results;
