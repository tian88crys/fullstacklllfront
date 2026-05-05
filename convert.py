import re

with open('cursos.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract body content
body_match = re.search(r'<body[^>]*>(.*?)</body>', content, re.DOTALL | re.IGNORECASE)
if body_match:
    body_content = body_match.group(1)
else:
    body_content = content

# Replace class= with className=
jsx = body_content.replace('class="', 'className="')

# Replace inline comments
jsx = re.sub(r'<!--(.*?)-->', r'{/* \1 */}', jsx, flags=re.DOTALL)

# Handle self-closing tags (img, input, hr, br)
def close_tag(match):
    tag = match.group(0)
    if not tag.endswith('/>') and not tag.endswith('/ >'):
        return tag[:-1] + ' />'
    return tag

jsx = re.sub(r'<(img|input|hr|br)[^>]*>', close_tag, jsx)

# Replace 'for=' with 'htmlFor='
jsx = jsx.replace('for="', 'htmlFor="')

# Write to file
with open('src/Cursos.jsx', 'w', encoding='utf-8') as f:
    f.write('import React from "react";\n\n')
    f.write('const Cursos = () => {\n')
    f.write('    return (\n')
    f.write('        <div className="bg-surface font-body text-on-surface antialiased">\n')
    f.write(jsx)
    f.write('\n        </div>\n')
    f.write('    );\n')
    f.write('};\n\n')
    f.write('export default Cursos;\n')
