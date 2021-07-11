import React, { Component } from 'react';
import Card from './Card';

interface ILaneData {
    id: number; title: string; description: string;
}

interface ILaneProps {
    laneType?: 'todo' | 'in progress' | 'done' | string;
    laneData?: Array<ILaneData>;
}

const defaultProps: ILaneProps = {
    laneType: 'Unnamed Lane'
}

interface ILaneState {

}

const testCard = <Card
                    title="Make Dan a React Dev"
                    id={1}
                    description="We need to get good at this stuff because we suck.
                    Joseph is a lonely Angular developer and Dan is up in the clouds
                    chilling with the popular React dev crowd up in Tesco."
                ></Card>;

class Lane extends Component<ILaneProps, ILaneState> {
    state: ILaneState = {

    };

    render() {
        console.log(this.props.laneType, this.props.laneData);

        return (
            <div className="lane">
                <h1>{this.props.laneType ? this.props.laneType : defaultProps.laneType}</h1>
                {testCard}
                {
                    this.props.laneData?.map((card, i) => {
                        return (
                            <Card
                                id={card.id}
                                title={card.title}
                                description={card.description}
                            ></Card>
                        );
                    })
                }
            </div>
        );
    }
}

export default Lane;