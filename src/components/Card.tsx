import React from "react";

interface ICardProps {
    title: string;
    description: string;
    id: number;
}

class Card extends React.Component<ICardProps> {
    render() {
        return (
            <div id={window.crypto.getRandomValues(new Uint32Array(1)).toString()}
                className="card">
                <h2>[{this.props.id}] {this.props.title}</h2>
                <p>{this.props.description}</p>
            </div>
        );
    }
}

export default Card;