import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';

const QuestionForm = ({ passageEditor, setPassageEditor, setQuestionPassage, setQuestion, quesitonEditor, setQuesitonEditor }) => {
  return (
    <div className="mb-5">
      <div className="flex flex-col gap-3">
        <div>
          <h2 className="text-lg">Passage</h2>
          <div className="border rounded">
            <CKEditor
              onReady={editor => {
                editor.ui.getEditableElement().parentElement.insertBefore(
                  editor.ui.view.toolbar.element,
                  editor.ui.getEditableElement()
                )
                setPassageEditor(editor);
              }}
              onError={({ willEditorRestart }) => {
                if (willEditorRestart) {
                  passageEditor.ui.view.toolbar.element.remove()
                }
              }}
              editor={DecoupledEditor}
              data=""
              onChange={(event, editor) => setQuestionPassage(editor.getData())}
            />
          </div>
        </div>

        <div>
          <h2 className="text-lg">Question</h2>
          <div className="border rounded">
            <CKEditor
              onReady={editor => {
                editor.ui.getEditableElement().parentElement.insertBefore(
                  editor.ui.view.toolbar.element,
                  editor.ui.getEditableElement()
                )
                setQuesitonEditor(editor);
              }}
              onError={({ willEditorRestart }) => {
                if (willEditorRestart) {
                  quesitonEditor.ui.view.toolbar.element.remove()
                }
              }}
              editor={DecoupledEditor}
              data=""
              onChange={(event, editor) => setQuestion(editor.getData())}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionForm;