import React, { Component } from "react";
import Layout from "@vtex/styleguide/lib/Layout";
import Card from "@vtex/styleguide/lib/Card";
import Input from "@vtex/styleguide/lib/Input";
import Button from "@vtex/styleguide/lib/Button";

class AddToCart extends Component {
  render() {
    return (
      <div className="form-wrapper">
        <Layout fullWidth>
          <Card>
            <div className="app-form">
              <h5>Login</h5>
              <Input label="Email" type="email" />
              <Input label="Password" type="password" />
              <Button
                variation="danger"
                onClick={() => this.props.history.push("/cart")}
              >
                Submit
              </Button>
            </div>
          </Card>
        </Layout>
      </div>
    );
  }
}

export default AddToCart;
