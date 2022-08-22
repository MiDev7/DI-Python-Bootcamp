import json
sampleJson = { 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}
json_file = "my_file.json"
sampleJson["company"]["employee"]["Birth_date"] = "15 Aout 2020"
print(sampleJson["company"]["employee"]["payable"]["salary"])
with open(json_file, 'w') as file_obj:
    json.dump(sampleJson, file_obj, indent = 2, sort_keys=True)

