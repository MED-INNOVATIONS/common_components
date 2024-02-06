import React, { Component } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import styled from "styled-components";
import _ from "lodash";

import { LoadingOverlay } from "orbital_common_components";
// import LoadingOverlay from "../../LoadingOverlay";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const StyledDiv = styled.div`
  .rdw-editor-toolbar{
    border-top-color: white;
    border-right-color: white;
    border-left-color: white;
    border-bottom-color: #d9d9d9;
    z-index: 1;
  }

  .rdw-editor-wrapper{
    border: 1px solid;
    border-color: ${props => props.isInvalid === true ? "#ff4d4f" : "#d9d9d9"};
  }

  .rdw-editor-main{
    height: ${props => props.editorHeight};
    max-height: ${props => props.maxHeight};
  }
`;

class HTMLTextEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      init: 0,
      editorState: EditorState.createEmpty()
    };

    this.onEditorStateChange = this.onEditorStateChange.bind(this);
    this.uploadImageCallBack = this.uploadImageCallBack.bind(this);
  }

  /*************************************************************************/
  /************************** STANDARD *************************************/
  /*************************************************************************/
  componentDidMount() {
    this.parseData(this.props.data);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.data != nextProps.data && this.state.init == 0) {
      this.setState({ init: 1 });
      this.parseData(nextProps.data);
    } else if (this.props.data != nextProps.data && this.props.lang != nextProps.lang) {
      this.parseData(nextProps.data);
    }
  }

  parseData(data) {
    data = _.isEmpty(data) === false ? data : "";
    const contentBlock = htmlToDraft(data);
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
      const editorState = EditorState.createWithContent(contentState);
      this.setState({ editorState: editorState });
    }
  }

  /*************************************************************************/
  /************************** FUNCTIONS ************************************/
  /*************************************************************************/
  uploadImageCallBack(file) {
    var self = this;
    return new Promise(function (resolve, reject) {
      self.setState({ loading: true }, () => {
        self.props
          .onUploadImage(file)
          .then(imageUrl => {
            var uploadResponse = { data: { link: imageUrl } };
            resolve(uploadResponse);
          })
          .catch(error => {
            reject(error);
          })
          .finally(() => {
            self.setState({ loading: false });
          });
      });
    });
  }

  onEditorStateChange(editorState) {
    this.props.onChange(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    this.setState({ editorState: editorState });
  }

  /*************************************************************************/
  /************************** RENDER ***************************************/
  /*************************************************************************/
  render() {
    var { localization, disabled, error, isInvalid, editorHeight, maxHeight, options = ["inline"] } = this.props;
    var { editorState, loading } = this.state;

    return (
      <LoadingOverlay active={loading} spinner text={(localization.loading || "Loading") + "..."}>
        <StyledDiv isInvalid={error || isInvalid} editorHeight={editorHeight} maxHeight={maxHeight}>
          <Editor
            readOnly={disabled}
            toolbarHidden={disabled}
            editorClassName={"editor_style"}
            toolbar={{
              options: options,
              inline: { inDropdown: false },
            }}
            editorState={editorState}
            onEditorStateChange={this.onEditorStateChange}>
            <textarea disabled value={draftToHtml(convertToRaw(editorState.getCurrentContent()))} />
          </Editor>
        </StyledDiv>
      </LoadingOverlay>
    );
  }
}
export default HTMLTextEditor;