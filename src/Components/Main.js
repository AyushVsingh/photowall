import React, { Component } from 'react'
import List from './List'
import Title from './Title'
class Main extends Component {
    render() {
        return <div>
            <Title title={'Greeting'} />
            <List tasks={['How the law', 'Walk the dog']} />
            <List tasks={['house the driveway', 'finish the laundry']} />
        </div>
    }
}

export default Main