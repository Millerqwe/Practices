import csv
import json


def get_notes(path):
	"""
	Get notes of time from a csv file
	"""

	with open(path, encoding='utf-8') as f:
	    reader = csv.DictReader(f)
	    rows = [tuple(i.values()) for i in list(reader)]

	return rows


if __name__ == '__main__':
	data = get_notes('backup_20191201_110852.csv')

	with open('results.json', mode='w', encoding='utf-8') as f:
	    json.dump(data, f)
