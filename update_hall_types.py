import glob
import os

target_block = """                                    <select class="form-select">
                                        <option selected>Hall Type</option>
                                        <option value="1">Main Hall</option>
                                        <option value="2">Banquet Hall</option>
                                        <option value="3">Meeting Room</option>
                                    </select>"""

replacement_block = """                                    <select class="form-select">
                                        <option selected>Hall Type</option>
                                        <option value="1">Ernestina Hall</option>
                                        <option value="2">Victoria Hall</option>
                                        <option value="3">Gallery Hall</option>
                                        <option value="4">Conference Room</option>
                                    </select>"""

html_files = glob.glob("/Users/macbook/Downloads/Hotelier/*.html")

count = 0
for filepath in html_files:
    with open(filepath, "r") as f:
        content = f.read()
    
    if target_block in content:
        new_content = content.replace(target_block, replacement_block)
        with open(filepath, "w") as f:
            f.write(new_content)
        print(f"Updated {os.path.basename(filepath)}")
        count += 1
print(f"Done. Updated {count} files.")
