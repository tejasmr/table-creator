import * as React from 'react'

type TableCreatorProps = {
  headers: string[];
  data: object[];
}

export default function TableCreator(props: TableCreatorProps) {
  const headers = props.headers;
  return (
    <table id='table' >
    <thead>
    <tr>
    {headers.map((header) => 
      <td>{header}</td>
    )}
    </tr>
    </thead>
    {props.data.map((datapoint, index) => {
      return (
        <tr key={index}>
          {headers.map((header) => {
            return <td>{datapoint[header]}</td>
          })}
        </tr>
      )
    })}
    </table>
  );
}