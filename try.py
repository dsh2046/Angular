
import re


li = 'aabccccdda'
p = re.compile(r"([a-zA-Z])(\1*)")
rl = p.findall(li)
# for k, v in enumerate(rl):
#     if len(rl[k][1]) >= 2:
#         rl.remove(rl[k])
#
# final_list = [each for sub in rl for each in sub]
# final = ''.join(final_list)
# print(final[::-1])
print(rl)








