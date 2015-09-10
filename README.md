`json-file-binding` is another module to bind a json object to a file.

Bind your own object to a file, with autosave or not.
Extend the object with the file content and save it at the process close (verified).


## Usage

**Syntax:** json-file-bind **(** `filePath`, `objToBind`, [`autoSave`] **)**

### Arguments

* `filePath` *String*
The file to bind
* `objToBind`	*Object* / *Array*
The object to bind.
* `autoSave` *Object* (Optional)
Set to true if you want to save the file at any change to your object. Works only array or object but save on exit stills work.

