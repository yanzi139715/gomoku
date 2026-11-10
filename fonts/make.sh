#!/bin/zsh
# 重新裁剪字体：页面里加了新字（新文案、新关卡名）后运行一次，然后提交 fonts/ 里的 woff2。
# 字体：Noto Serif SC（思源宋体），SIL Open Font License，见 OFL.txt。
# 用法：在项目根目录运行  zsh fonts/make.sh
set -e
cd "$(dirname "$0")/.."
T=$(mktemp -d)
curl -sL -o $T/full.ttf "https://github.com/google/fonts/raw/main/ofl/notoserifsc/NotoSerifSC%5Bwght%5D.ttf"
python3 - "$T/chars.txt" <<'PY'
import sys,glob
s=set('０１２３４５６７８９')
for f in [p for p in glob.glob('*.html') if not p.startswith('design-')]:
  for ch in open(f,encoding='utf-8').read():
    o=ord(ch)
    if 0x20<=o<0x7f or o>=0x2000: s.add(ch)
open(sys.argv[1],'w',encoding='utf-8').write(''.join(sorted(s)))
print(len(s),'个字')
PY
for w in 300 400 600; do
  uvx --quiet --from 'fonttools[woff]' fonttools varLib.instancer $T/full.ttf wght=$w -o $T/w$w.ttf -q
  uvx --quiet --from 'fonttools[woff]' pyftsubset $T/w$w.ttf --text-file=$T/chars.txt --flavor=woff2 --layout-features='*' --output-file=fonts/noto-serif-sc-$w.woff2
done
rm -rf $T; ls -la fonts/*.woff2
