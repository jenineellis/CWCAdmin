import React from "react";

function VineyardList(props) {
    return (
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-12">
                            <h3>{props.vineyardName}</h3>
                            <h5>{props.subregion} - {props.vineyardRegion}</h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                        <p><div dangerouslySetInnerHTML={{ __html: props.vineyardDetails}}></div></p>
                        </div>
                    </div>
                </div>   
            </div>
    )
}

export default VineyardList;

//dangerouslySetInnerHTML={{ __html: wine.longDescription }}