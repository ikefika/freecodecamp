import ReactDOM from 'https://esm.sh/react-dom@18.2.0'
import React from 'https://esm.sh/react@18.2.0'
import { useState } from 'https://esm.sh/react@18.2.0'



function MarkdownEditor() {
  const [textarea, setTextarea] = useState(
    `a heading element (H1 size):
# Welcome to my React Markdown Previewer!

a sub heading element (H2 size):
## This is a sub-heading...

a link:
[links](https://www.freecodecamp.org)

inline code:
\`<div></div>\`

a code block:
\`\`\`
// this is multi-line code:
function anotherExample(firstLine, lastLine) {
  if (firstLine == \'\`\`\`\' && lastLine == \'\`\`\`\') {
    return multiLineCode;
  }
}
\`\`\`

List items:
- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

1. And there are numbered lists too.
2. Use just 1s if you want!
3. And last but not least, let's not forget embedded images:

a blockquote:
> Block Quotes!

an image:
![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

bolded text:
**bold text**
`
  );

  const handleChange = (event) => {
    setTextarea(event.target.value);
  };

  const rawMarkup = () =>{
    marked.setOptions({
      renderer: new marked.Renderer(),
      gfm: true,
      tables: true,
      breaks: true,
      pedantic: false,
      sanitize: true,
      smartLists: true,
      smartypants: false,
      highlight: function (code) {
        return hljs.highlightAuto(code).value
      }
    });
  
    var rawMarkup = marked(textarea, {sanitize: true});
    return {
      __html: rawMarkup
    };
  };

  
  return (
    <div className="container">
			<div className="row">
				<h1 className="text-center">
					ReactJS Markdown Editor
				</h1>
				<div className="col">
					<form>
            <h3 className="text-center">Markdown Editor</h3>
            <textarea id="editor" className="editor"  defaultValue={textarea} onChange={handleChange} />
          </form>
				</div>
				<div className="col">
					<h3 className="text-center">Preview HTML</h3>
					<div id="preview" dangerouslySetInnerHTML={rawMarkup()}></div>
				</div>
			</div>
		</div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MarkdownEditor />);

