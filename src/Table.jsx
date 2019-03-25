import React from 'react';
import PropTypes from 'prop-types';

const Table = function(props) {
    const renderColumns = function() {
        return props.columns.map(header => (
            <th key={Math.random()}>{header}</th>
        ));
    }

    const renderRows = function() {
        return props.data.map(data => (
            <tr key={data[props.model[0]]}>
                {props.model.map(model => (
                    <td key={Math.random()}>{data[model]}</td>
                ))}
            </tr>
        ));
    }

    return (
        <table className={props.type ? `table table-${props.type}` : `table`}>
            <thead>
                <tr>{renderColumns()}</tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    );

     
}

Table.propTypes = {
    columns: PropTypes.arrayOf(PropTypes.string).isRequired,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    model: PropTypes.arrayOf(PropTypes.string).isRequired,
    type: PropTypes.string
}   
export default Table;

/* 
    How to use...
    <Table
          type="dark | "
          columns={["Id", "First Name", "Last Name", "City", "Salary"]}
          model={["id", "firstName", "lastName", "city", "salary"]}
          data={[
            { id: 1, firstName: "Joao", lastName: "Sousa", city: "Fortaleza", salary: 30000},
            { id: 2, firstName: "Zé", lastName: "Pereira", city: "Sao Paulo", salary: 23000}
          ]}
        />
*/