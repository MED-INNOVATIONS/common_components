import React, { Component } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";

import LoadingOverlay from "../LoadingOverlay/LoadingOverlay";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

class HTMLTextEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            editorState: EditorState.createEmpty(),

        }

        this.state = {
            editorState: this.parseData(props.value)
        }

        this.onEditorStateChange = this.onEditorStateChange.bind(this);
        this.uploadImageCallBack = this.uploadImageCallBack.bind(this);
    }

    /*************************************************************************/
    /************************** STANDARD *************************************/
    /*************************************************************************/
    componentDidMount() {
        var editorState = this.parseData(this.props.data);
        this.setState({
            editorState: editorState
        })
    }

    parseData(data) {
        if (data != null) {
            var tmp = htmlToDraft(data);
            tmp = ContentState.createFromBlockArray(tmp);
            tmp = EditorState.createWithContent(tmp);
            tmp = EditorState.moveFocusToEnd(tmp);
            return tmp;
        }
    }

    /*************************************************************************/
    /************************** FUNCTIONS ************************************/
    /*************************************************************************/
    uploadImageCallBack(file) {
        var self = this;
        return new Promise(function (resolve, reject) {
            self.setState({ loading: true }, () => {
                self.props.onUploadImage(file)
                    .then((imageUrl) => {
                        var uploadResponse = { "data": { "link": imageUrl } };
                        resolve(uploadResponse);
                    })
                    .catch((error) => {
                        reject(error);
                    })
                    .finally(() => {
                        self.setState({ loading: false });
                    })
            })
        })
    }

    clearText(text) {
        // var rx = /(<img.*float:.*\/>*)/g;
        // var str = text;

        // String.prototype.insert = function (index, string) {
        //     if (index > 0)
        //         return (
        //             this.substring(0, index + 1) +
        //             string +
        //             this.substring(index + 1, this.length)
        //         );
        //     else return string + this;
        // };

        // var match;
        // var str2 = "";

        // while ((match = rx.exec(str))) {
        //     var str2 = str.insert(
        //         rx.lastIndex - 1,
        //         '<div style="clear: both;"></div>'
        //     );
        // }

        // if (str2 == "") {
        //     return str;
        // } else {
        //     return str2;
        // }
        return text;
    };

    onEditorStateChange(editorState) {
        this.setState({
            editorState: editorState
        }, () => {
            if (this.props.onChange) {
                var rawContent = convertToRaw(editorState.getCurrentContent())
                var editorValue = draftToHtml(rawContent);
                var newText = this.clearText(editorValue);
                this.props.onChange(newText);
            }
        })
    }

    /*************************************************************************/
    /************************** RENDER ***************************************/
    /*************************************************************************/
    render() {
        var { localization, disabled, error } = this.props;
        var { editorState, loading } = this.state;

        var wrapperClassName = error == true ? "wrapper_style_error" : "wrapper_style_normal";

        return (
            <LoadingOverlay
                active={loading}
                spinner
                text={(localization.loading || "Loading") + "..."}>
                <Editor
                    readOnly={disabled}
                    toolbarHidden={disabled}

                    wrapperClassName={wrapperClassName}
                    toolbarClassName={"toolbar_style"}
                    editorClassName={"editor_style"}

                    toolbar={{
                        options: [
                            "inline",
                            "blockType",
                            "fontFamily",
                            "fontSize",
                            "list",
                            "textAlign",
                            "link",
                            "image",
                            "remove",
                            "history",
                        ],
                        inline: { inDropdown: true },
                        list: { inDropdown: true },
                        textAlign: { inDropdown: true },
                        link: { inDropdown: true },
                        history: { inDropdown: true },
                        image: {
                            uploadCallback: this.uploadImageCallBack,
                            previewImage: true,
                            inputAccept: "image/gif,image/jpeg,image/jpg,image/png,image/svg",
                            alt: { present: true, mandatory: false },
                            defaultSize: { width: "100%", height: "100%" },
                        },
                    }}
                    editorState={editorState}
                    onEditorStateChange={this.onEditorStateChange}



                >

                </Editor>
            </LoadingOverlay>
        )
    }
}
export default HTMLTextEditor;