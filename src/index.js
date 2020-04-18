import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import marked from "marked";
marked.setOptions({
  breaks: true
});
const Editor = props => {
  return (
    <div id="editorContainer">
      <div className="relativeContainerHeader">
        dfvfsvfvf
        <div className="containerHeader">Type your markdown here:</div>
      </div>
      <textarea
        className="mainBlock"
        id="editor"
        value={props.textareaContent}
        onChange={props.onChange}
      ></textarea>
    </div>
  );
};
const Previewer = props => {
  return (
    <div id="previewerContainer">
      <div className="relativeContainerHeader">
        xvxcvsfvsfd
        <div className="containerHeader">See it converted:</div>
      </div>
      <div
        className="mainBlock"
        id="preview"
        dangerouslySetInnerHTML={{ __html: props.previewerContent }}
      />
    </div>
  );
};
class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorContent: startContent
    };
    this.actualizer = this.actualizer.bind(this);
  }
  actualizer(e) {
    this.setState({ editorContent: e.target.value });
    document.getElementById("preview").scrollIntoView(false);
  }
  render() {
    return (
      <div className="сheck">
        <Editor
          textareaContent={this.state.editorContent}
          onChange={this.actualizer}
        />
        <Previewer previewerContent={marked(this.state.editorContent)} />
      </div>
    );
  }
}
const startContent = `# This is a markdown previewer
As [Wiki](https://en.wikipedia.org/wiki/Markdown) says:
> Markdown is a lightweight markup language with plain text formatting syntax.
## You can use it to:
- format readme files;
- write messages in online discussion forums;
- create rich text using a plain text editor so on.

You can freely insert \`<html>\` elements in your markdown file.
Eventually, it's going to be converted to a standard HTML markup, like this:

    <html>
      <head>
      </head>
      <body>
      </body>
    </html>

Try yourself, tape your markdown and see, what you'll get. 
**Have fun!** ![smile](https://res.cloudinary.com/dmujv3o3b/image/upload/v1578401519/smile-vibrant.png#%20smile%20)
`;

ReactDOM.render(<Project />, document.getElementById("project"));
