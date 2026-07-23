import glob
import os

target_block = """                    <div class="row g-2">
                        <div class="col-md-10">
                            <div class="row g-2">
                                <div class="col-md-3">
                                    <div class="date" id="date1" data-target-input="nearest">
                                        <input type="text" class="form-control datetimepicker-input"
                                            placeholder="Check in" data-target="#date1" data-toggle="datetimepicker" />
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="date" id="date2" data-target-input="nearest">
                                        <input type="text" class="form-control datetimepicker-input" placeholder="Check out" data-target="#date2" data-toggle="datetimepicker"/>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <select class="form-select">
                                        <option selected>Adult</option>
                                        <option value="1">Adult 1</option>
                                        <option value="2">Adult 2</option>
                                        <option value="3">Adult 3</option>
                                    </select>
                                </div>
                                <div class="col-md-3">
                                    <select class="form-select">
                                        <option selected>Child</option>
                                        <option value="1">Child 1</option>
                                        <option value="2">Child 2</option>
                                        <option value="3">Child 3</option>
                                    </select>
                                </div>
                            </div>
                        </div>"""

replacement_block = """                    <div class="row g-2">
                        <div class="col-md-10">
                            <div class="row g-2">
                                <div class="col-md-2">
                                    <div class="date" id="date1" data-target-input="nearest">
                                        <input type="text" class="form-control datetimepicker-input"
                                            placeholder="Check in" data-target="#date1" data-toggle="datetimepicker" />
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <div class="date" id="date2" data-target-input="nearest">
                                        <input type="text" class="form-control datetimepicker-input" placeholder="Check out" data-target="#date2" data-toggle="datetimepicker"/>
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <select class="form-select">
                                        <option selected>Adult</option>
                                        <option value="1">Adult 1</option>
                                        <option value="2">Adult 2</option>
                                        <option value="3">Adult 3</option>
                                    </select>
                                </div>
                                <div class="col-md-2">
                                    <select class="form-select">
                                        <option selected>Child</option>
                                        <option value="1">Child 1</option>
                                        <option value="2">Child 2</option>
                                        <option value="3">Child 3</option>
                                    </select>
                                </div>
                                <div class="col-md-2">
                                    <select class="form-select">
                                        <option selected>Room Type</option>
                                        <option value="1">Premium Suites</option>
                                        <option value="2">Deluxe Suite</option>
                                        <option value="3">Kitchenette Room</option>
                                        <option value="4">Business Suite</option>
                                    </select>
                                </div>
                                <div class="col-md-2">
                                    <select class="form-select">
                                        <option selected>Hall Type</option>
                                        <option value="1">Main Hall</option>
                                        <option value="2">Banquet Hall</option>
                                        <option value="3">Meeting Room</option>
                                    </select>
                                </div>
                            </div>
                        </div>"""

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
