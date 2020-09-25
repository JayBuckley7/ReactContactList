import "./style.css";
import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import Paper from "@material-ui/core/Paper";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import TableRow from "@material-ui/core/TableRow";
import Sort from "@material-ui/icons/ImportExport";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TextField from "@material-ui/core/TextField";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import TableContainer from "@material-ui/core/TableContainer";
const styles = theme => ({
  listItemText:{
    fontSize:'0.7em',//Insert your required size
  }
});

export class Tbl extends Component {
  state = {
    
    last: "",
    email: "",
    first: "",
    edit: false,
    open: false,
    index: null,
    practice: "",
    specialty: "",
    original: [
      {
        last_name: "Harris",
        first_name: "Mike",
        email_address: "mharris@updox.com",
        specialty: "Pediatrics",
        practice_name: "Harris Pediatrics",
      },
      {
        last_name: "Wijoyo",
        first_name: "Bimo",
        email_address: "bwijoyo@updox.com",
        specialty: "Podiatry",
        practice_name: "Wijoyo Podiatry",
      },
      {
        last_name: "Rose",
        first_name: "Nate",
        email_address: "nrose@updox.com",
        specialty: "Surgery",
        practice_name: "Rose Cutters",
      },
      {
        last_name: "Carlson",
        first_name: "Mike",
        email_address: "mcarlson@updox.com",
        specialty: "Orthopedics",
        practice_name: "Carlson Orthopedics",
      },
      {
        last_name: "Witting",
        first_name: "Mike",
        email_address: "mwitting@updox.com",
        specialty: "Pediatrics",
        practice_name: "Witting’s Well Kids Pediatrics",
      },
      {
        last_name: "Juday",
        first_name: "Tobin",
        email_address: "tjuday@updox.com",
        specialty: "General Medicine",
        practice_name: "Juday Family Practice",
      },
    ],
    dataSet: [
      {
        last_name: "Harris",
        first_name: "Mike",
        email_address: "mharris@updox.com",
        specialty: "Pediatrics",
        practice_name: "Harris Pediatrics",
      },
      {
        last_name: "Wijoyo",
        first_name: "Bimo",
        email_address: "bwijoyo@updox.com",
        specialty: "Podiatry",
        practice_name: "Wijoyo Podiatry",
      },
      {
        last_name: "Rose",
        first_name: "Nate",
        email_address: "nrose@updox.com",
        specialty: "Surgery",
        practice_name: "Rose Cutters",
      },
      {
        last_name: "Carlson",
        first_name: "Mike",
        email_address: "mcarlson@updox.com",
        specialty: "Orthopedics",
        practice_name: "Carlson Orthopedics",
      },
      {
        last_name: "Witting",
        first_name: "Mike",
        email_address: "mwitting@updox.com",
        specialty: "Pediatrics",
        practice_name: "Witting’s Well Kids Pediatrics",
      },
      {
        last_name: "Juday",
        first_name: "Tobin",
        email_address: "tjuday@updox.com",
        specialty: "General Medicine",
        practice_name: "Juday Family Practice",
      },
    ],
  };

  handleOpen = () => this.setState({ open: true });

  handleClose = () => this.setState({ open: false });

  onChange = (key, text) => this.setState({ [key]: text.target.value });

  save = () => {
    const { last, email, first, practice, specialty, dataSet } = this.state;
    
    if (last && email && first && practice && specialty) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      let check = re.test(String(email).toLowerCase());
      if (check) {
        let obj = dataSet.concat({
          last_name: last,
          first_name: first,
          specialty: specialty,
          email_address: email,
          practice_name: practice,
        });
        this.setState({ dataSet: obj, original: obj, open: false });
      } else alert("Invalid Email Address");
    } else alert("One or More Input fields are empty");
  };

  delete = (i) => {
    var array = [...this.state.dataSet];
    array.splice(i, 1);
    this.setState({ dataSet: array, original: array });
  };

  edit = (data, index) => {
    this.setState({
      index,
      open: true,
      edit: true,
      last: data.last_name,
      first: data.first_name,
      email: data.email_address,
      specialty: data.specialty,
      practice: data.practice_name,
    });
  };

  update = () => {
    const { dataSet, index } = this.state;
    let ar = [];
    for (let i = 0; i < dataSet.length; i++) {
      if (index == i) {
        ar.push({
          last_name: this.state.last,
          first_name: this.state.first,
          specialty: this.state.specialty,
          email_address: this.state.email,
          practice_name: this.state.practice,
        });
      } else ar.push(dataSet[i]);
    }
    this.setState({ original: ar, dataSet: ar, edit: false, open: false });
  };

  sorting = (key) => {
    let check = this.state.dataSet.sort((a, b) => {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    });
    this.setState({ dataSet: check });
  };

  search = (e) => {
    let data = this.state.original.filter((name) => {
      return name.first_name && name.first_name.indexOf(e.target.value) >= 0;
    });
    this.setState({ dataSet: data });
  };

  render() {
    const { dataSet, edit, open } = this.state;
    const { last, email, first, practice, specialty } = this.state;
    const styles = theme => ({
      tablecell: {
          fontSize: '40pt'
      }
  }); 
    return (
      <div>
        <div className="tabHead">
          <Button variant="contained" color="primary" onClick={this.handleOpen}>
            Add Contact
          </Button>
          <input
            className="searchInput"
            placeholder="Search By First Name"
            onChange={(text) => this.search(text)}
          />
          <Dialog
            open={open}
            onClose={this.handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">
              Add New Contact Detail
            </DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                fullWidth
                value={first}
                margin="dense"
                label="First Name"
                onChange={(text) => this.onChange("first", text)}
              />
              <TextField
                fullWidth
                value={last}
                margin="dense"
                label="Last Name"
                onChange={(text) => this.onChange("last", text)}
              />
              <TextField
                fullWidth
                value={email}
                margin="dense"
                label="Email Address"
                onChange={(text) => this.onChange("email", text)}
              />
              <TextField
                fullWidth
                margin="dense"
                label="Specialty"
                value={specialty}
                onChange={(text) => this.onChange("specialty", text)}
              />
              <TextField
                fullWidth
                margin="dense"
                value={practice}
                label="Practice Name"
                onChange={(text) => this.onChange("practice", text)}
              />
            </DialogContent>
            <DialogActions>
              <Button
                color="secondary"
                variant="contained"
                onClick={this.handleClose}
              >
                Cancel
              </Button>
              {edit ? (
                <Button
                  onClick={this.update}
                  variant="contained"
                  color="primary"
                >
                  Update
                </Button>
              ) : (
                <Button onClick={this.save} variant="contained" color="primary">
                  Add
                </Button>
              )}
            </DialogActions>
          </Dialog>
        </div>

        <TableContainer component={Paper} >
          <Table  aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell  >
                  First Name
                  <Sort onClick={() => this.sorting("first_name")} />
                </TableCell>
                <TableCell className="text" >
                  Last Name
                  <Sort onClick={() => this.sorting("last_name")} />
                </TableCell>
                <TableCell >
                  Email Address
                  <Sort onClick={() => this.sorting("email_address")} />
                </TableCell>
                <TableCell >
                  Specialty
                  <Sort onClick={() => this.sorting("specialty")} />
                </TableCell>
                <TableCell >
                  Practice Name
                  <Sort onClick={() => this.sorting("practice_name")} />
                </TableCell>
                <TableCell >Options </TableCell>
                {/* <TableCell >Delete</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {dataSet.map((row, i) => (
                <TableRow>
                  <TableCell >{row.first_name}</TableCell>
                  <TableCell >{row.last_name}</TableCell>
                  <TableCell >{row.email_address}</TableCell>
                  <TableCell >{row.specialty}</TableCell>
                  <TableCell >{row.practice_name}</TableCell>
                  <TableCell  >
                    <Button
                      color="primary"
                      variant="contained"
                      onClick={() => this.edit(row, i)}
                    >
                      Edit
                    </Button>
                    <Button
                      color="secondary"
                      variant="contained"
                      onClick={() => this.delete(i)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}
export var Junk;
