# Task 2

## Test the app end-to-end and report any bug or UX issue that you consider needs to be solved. Again, in this case, you must be as formal as possible when describing each one using the tools, templates, and/or artifacts that you think suit better for this task.

### Bug ID: BUG-01
#### Title: Folder section lacks sorting functionality
#### Description:
The "Folders" section does not have a sorting feature. Clicking on "ID" or "Name" does not reorder the folders, whereas the "To-Do Items" section does support sorting.
#### Steps to Reproduce:
1. Log in to the application.
2. Navigate to the "Folders" section.
3. Create some new Folders with different names.
4. Click on the "ID" or "Name" column headers.
#### Expected Result:
Folders should be sorted in ascending or descending order when clicking on "ID" or "Name."
#### Actual Result:
Clicking on "ID" or "Name" has no effect, and folders remain in the same order.
#### Environment and version:
Browser: Google Chrome, version 134.0.6998.118
#### Severity:
Low
#### Priority:
Medium

---

### Bug ID: BUG-02
#### Title: Folder section lacks pagination
#### Description:
The "Folders" section does not support pagination, causing usability issues when many folders are created. Users must manually scroll down to find specific entries. In contrast, the "To-Do Items" section includes pagination.
#### Steps to Reproduce:
1. Log in to the application.
2. Navigate to the "Folders" section.
3. Create more than 20 folders.
4. Observe that all folders are displayed in a single long list without pagination.
#### Expected Result:
The "Folders" section should include pagination to improve navigation and usability.
#### Actual Result:
All folders are displayed in a single list, requiring manual scrolling to locate specific entries.
#### Environment and version:
Browser: Google Chrome, version 134.0.6998.118
#### Severity:
Medium
#### Priority:
Medium

---

### Bug ID: BUG-03
#### Title: To-Do Items not included on Folder view
#### Description: 
When a user creates a folder and adds to-do items to it, the folder does not display the contained items when viewed, making it impossible to view the tasks assigned to each folder directly.
#### Steps to Reproduce:
1. Log in to the application.
2. Create a new folder.
3. Add one or more to-do items to the folder.
4. Navigate to the folder view.
#### Expected Result:
The folder should display the to-do items assigned to it.
#### Actual Result:
The folder appears empty, even when tasks have been added. Only the folder ID, name and user are shown.
#### Environment and version:
Browser: Google Chrome, version 134.0.6998.118
#### Severity:
Medium
#### Priority:
Priority