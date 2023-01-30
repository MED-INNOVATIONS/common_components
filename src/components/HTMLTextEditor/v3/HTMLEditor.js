// @import url("https://cdn.syncfusion.com/ej2/20.3.60/bootstrap4.css");

import React, { useEffect } from "react";
import { RichTextEditorComponent, Toolbar, Inject, Image, Link, HtmlEditor, Count, QuickToolbar, Table, PasteCleanup } from '@syncfusion/ej2-react-richtexteditor';
import { FileManager } from '@syncfusion/ej2-react-richtexteditor';
import _ from "lodash";

import * as SyncfusionUtils from "./../../../services/SyncfusionUtils";
import { items, tableItems, imageItems } from "./HtmlEditorItems";

function HTMLEditor(props) {
    const { language = "En", height, enabled, disabled, value, onChange } = props;
    const isEnabled = enabled === false || disabled === true ? false : true;
    var rteObj;

    /*************************************************************************/
    /************************ STANDARD ***************************************/
    /*************************************************************************/
    useEffect(() => {
        try {
            var element = document.getElementById("js-licensing");
            if (element) {
                element.remove();
            }

            var aTags = document.getElementsByTagName("a");
            var searchText = "Claim your free account";
            _.each(aTags, (tag) => {
                if (tag && tag.textContent.toLowerCase() == searchText.toLowerCase()) {
                    var parentElement = tag.parentElement;
                    parentElement.remove();

                    var secondParentElement = parentElement.parentElement;
                    if (secondParentElement) {
                        secondParentElement.remove();

                        var thirdParentElement = secondParentElement.parentElement;
                        if (thirdParentElement) {
                            thirdParentElement.remove();

                            var fourthParentElement = thirdParentElement.parentElement;
                            if (fourthParentElement) {
                                fourthParentElement.remove();
                            }
                        }
                    }

                    var divTags = document.getElementsByTagName("div");
                    _.each(divTags, (tag) => {
                        if (tag) {
                            var style = tag.style;
                            if (style.position === "fixed" &&
                                style.width == "100%" &&
                                style.height == "100%" &&
                                style.zIndex == "99999" &&
                                style.backgroundColor == "rgba(0, 0, 0, 0.5)") {
                                tag.remove();
                                return;
                            }
                        }
                    })
                }
            })
        } catch (e) {
            console.error(e)
        }
    })

    /*************************************************************************/
    /************************ RENDER ***************************************/
    /*************************************************************************/
    const quickToolbarSettings = {
        table: tableItems,
        image: imageItems
    };

    const toolbarSettings = {
        items: items
    };

    return (
        <RichTextEditorComponent
            id="toolsRTE"
            height={height}
            locale={SyncfusionUtils.getLocaleByLanguage(language)}
            ref={(richtexteditor) => { rteObj = richtexteditor; }}
            enabled={isEnabled}
            value={value}
            toolbarSettings={toolbarSettings}
            pasteCleanupSettings={{
                prompt: true,
                plainText: false,
                keepFormat: false
            }}
            insertImageSettings={{
                allowedTypes: [".png", ".png"],
                display: "inline",
                width: "auto",
                height: "auto",
                saveFormat: "Base64"
            }}
            quickToolbarSettings={quickToolbarSettings}
            showCharCount={true}
            change={(e) => {
                onChange(e.value)
            }}>
            <Inject services={[Toolbar, Image, Link, HtmlEditor, Count, QuickToolbar, Table, FileManager, PasteCleanup]} />
        </RichTextEditorComponent>
    );
}
export default HTMLEditor;