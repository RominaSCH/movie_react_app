import React from "react";
import "./Detail.css";

class Detail extends React.Component{
    componentDidMount(){
        const { location, history } = this.props;
        if(location.state === undefined){
            history.push("/"); //클릭으로 온 링크가 아닐 경우 홈으로 리다이렉트
        }
    }
    render(){
        const {location} = this.props;
        console.log(location.state);
        if(location.state){
            return (
                <div className="detail-container">
                    <img src={location.state.poster} alt={location.state.poster} title={location.state.poster}/>
                    <div className="text-box">
                    <h1 className="detail__title">{location.state.title}</h1>
                    {/* <h5 className="detail__year">{location.state.year}</h5> */}
                    <div className="detail__summary">{location.state.summary}</div>
                    </div>
                </div>
            );
        } else{
            return null;
        }
    }
}

export default Detail;