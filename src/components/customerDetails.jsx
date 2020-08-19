import React, { Component } from "react";
import Input from '@vtex/styleguide/lib/Input'
import Collapsible from '@vtex/styleguide/lib/Collapsible';


class CustomerDetails extends Component {
    state = {
        isOpen: false
    }

    render() {
        return(
            <div>
                <div className="mb3">
                    <Input label="Receiver Name" />
                </div>
                <div className="mb3">
                    <Input label="Receiver Contact Number" />
                </div>
                <div className="mb3">
                    <Input label="Email" />
                </div>
                <div className="mb5 mt5">
                    <Collapsible
                        onClick={e => this.setState({ isOpen: e.target.isOpen })}
                        isOpen={this.state.isOpen}
                    >
                        <div className="mt4">
                            <div className="mb3">
                                <Input
                                    type="password"
                                    label="Account Number"
                                />
                            </div>
                        </div>
                    </Collapsible>
                </div>
            </div>
        )
    }
}

export default CustomerDetails;