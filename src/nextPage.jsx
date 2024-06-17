import { useState } from "react";
const offsetNumber = 20
export let offset = 0;

export default function NextPage() {
    offset+=offsetNumber;
    console.log(offset);
};

export function PreviousPage() {
    if (offset > 0) {
     offset-=offsetNumber;
    };
};