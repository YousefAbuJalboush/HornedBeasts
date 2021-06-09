import React from 'react';
import HornedBeasts from './HornedBeasts';
import data from './data.json';



import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'

class Main extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            hornsNumber: 0,
            choseHornsFilter: this.props.hornedBeasts,
        };
    }

    choseHorns = (e) => {
        this.setState = {
            hornsNumber: e.target.value,

        };
        // console.log(this.setState.HornsNum);
        let choseHornsFilter = data.filter((number) => {
            if (Number(this.setState.hornsNumber) === 0) {
                return number.horns > 0;
            }
            else {
                return number.horns === Number(this.setState.hornsNumber);
            }

        });
        this.props.FilteredHorns(choseHornsFilter)
    };

    render() {

        return (
            <div>

                <Container>
                    <Row>
                        <Form className="mb-3 mx-5">
                            <Form.Control as="select" style={{ margin: '2rem' }} onChange={(e) => this.choseHorns(e)}>
                                <option value="0">all</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                                <option value="100">100</option>
                            </Form.Control>
                        </Form>

                    </Row>
                    <Row>
                        {this.props.data.map((beast) => {
                            return (
                                <HornedBeasts
                                    imageUrl={beast.image_url}
                                    title={beast.title}
                                    description={beast.description}
                                    keyword={beast.keyword}
                                    horns={beast.horns}
                                />
                            );
                        })}
                    </Row>
                </Container>
            </div>
        )
    }
}
export default Main
