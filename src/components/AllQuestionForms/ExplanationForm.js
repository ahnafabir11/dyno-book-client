import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';

const ExplanationForm = ({ setExplanation, explainEditor, setExplainEditor }) => {
  return (
    <div className="mb-5">
      <h2 className="text-lg mb-3">Explanation</h2>

      <div className="border rounded">
        <CKEditor
          onReady={editor => {
            editor.ui.getEditableElement().parentElement.insertBefore(
              editor.ui.view.toolbar.element,
              editor.ui.getEditableElement()
            )
            setExplainEditor(editor);
          }}
          onError={({ willEditorRestart }) => {
            if (willEditorRestart) {
              explainEditor.ui.view.toolbar.element.remove()
            }
          }}
          editor={DecoupledEditor}
          data=""
          onChange={(event, editor) => setExplanation(editor.getData())}
        />
      </div>
    </div>
  );
};

export default ExplanationForm;