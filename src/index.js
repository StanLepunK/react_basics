// import React from "react";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Basic from './0_basic';
import { Welcome } from './1_welcome';
import { Multi } from './2_multi';
import { Clock } from './3_clock';
import { Tempo } from './4_tempo';
import { Toggle } from './5_event_toggle';
import { ToggleShow } from './6_event_toggle_show';
import { ActionLink } from './7_event_function';
import { ButtonClick } from './8_event_class';
import { Mailbox } from './9_if_without_if';
import { Page } from './10_if_false_return_null';
import { list_items, List } from './11_list';
import { ListKey, ListKeyIDrandom } from './12_list_key';
import { NameForm } from './13_form';
import { DropdownDrink } from './14_form_dropdown';

const elem_welcome = <Welcome name="Félix" />;
const elem_numbers = [0, 1, -2, 4, -1];

ReactDOM.render(
  <React.StrictMode>
    <DropdownDrink />
    {/* <NameForm /> */}
    {/* <ListKey numbers={elem_numbers} /> */}
    {/* <ListKeyIDrandom numbers={elem_numbers} /> */}
    {/* {list_items} */}
    {/* <List numbers={elem_numbers} /> */}
    {/* <Page /> */}
    {/* <ToggleShow /> */}
    {/* <Mailbox unread={["truc", "machin", "bidule"]} /> */}
    {/* <Toggle /> */}
    {/* <ButtonClick /> */}
    {/* <ActionLink /> */}
    {/* {elem_welcome} */}
    {/* <Multi />
    <Basic name="Stan" nickname="le Punk" /> */}
    {/* <Clock date={new Date()} /> // this one is for class without constructor*/}
    {/* <Clock /> */}
    <Tempo increment={1} tempo={1} />
  </React.StrictMode>,

  // <Multi />,
  document.getElementById('shook-root')
);

// refresh your page, but it's very raw and not optimize for all
// function draw() {
//   ReactDOM.render(
//     <Clock date={new Date()} />,
//     document.getElementById("shook-root")
//   );
// }

// setInterval(draw, 1000);
