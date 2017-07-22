#!/bin/bash
name="$1"
text=$'import React from \'react\'\r\rclass '$name$' extends React.Component{\rconstructor(props){\rsuper(props);\rthis.state={}\r}\r\rrender(){\rreturn(<div/>);\r}\r}\r\rexport default '$name';'
#echo $text
mkdir ./src/components/$name
touch ./src/components/$name/index.js
echo $text >> ./src/components/$name/index.js
#cat ./src/components/$name/index.js
