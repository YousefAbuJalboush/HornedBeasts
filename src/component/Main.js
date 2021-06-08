import React from 'react';
import HornedBeasts from './HornedBeasts';
import hornedBeasts from './data.json';


import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

class Main extends React.Component {

    render() {

        return (
            <div>
                <Container>
                    <Row>
                        {
                            hornedBeasts.map((beast) => {
                                return (

                                    <HornedBeasts
                                        imageUrl={beast.image_url}
                                        title={beast.title}
                                        description={beast.description}
                                        keyword={beast.keyword}
                                        horns={beast.horns}
                                    />

                                )
                            })
                        }
                    </Row>
                </Container>
            </div>
        )
    }
}
export default Main
