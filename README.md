# Lancelot React
modal-lancelot-openclassrooms is a reusable React component which can be used as a modal in React projects.
## Installation
modal-lancelot-openclassrooms can be installed via npm:
npm install modal-lancelot-openclassrooms
## Prerequisites
To use modal-lancelot-openclassrooms, you need Node Package Manager (12.x or higher) and React.
One also needs a useRef React hook call
## Usage/Examples
```
import { Modal } from "modal-lancelot-openclassrooms"
const ref = useRef(null)
<Modal text="This is a modal's text." reference={ref}/>
```
## Properties
text : The text to display inside the modal.
reference: The useRef hook.
