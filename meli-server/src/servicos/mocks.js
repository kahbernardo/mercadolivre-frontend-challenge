import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const mocksPath = join(__dirname, '..', 'mocks');

let itemsSearchMock;
let itemDetailMock;
let categoriesMock;

function carregarMocks() {
  if (!itemsSearchMock) {
    itemsSearchMock = JSON.parse(
      readFileSync(join(mocksPath, 'items.search.mock.json'), 'utf-8')
    );
  }
  if (!itemDetailMock) {
    itemDetailMock = JSON.parse(
      readFileSync(join(mocksPath, 'item.detail.mock.json'), 'utf-8')
    );
  }
  if (!categoriesMock) {
    categoriesMock = JSON.parse(
      readFileSync(join(mocksPath, 'categories.mock.json'), 'utf-8')
    );
  }
}

export function obterMockBusca() {
  carregarMocks();
  return itemsSearchMock;
}

export function obterMockDetalhe() {
  carregarMocks();
  return itemDetailMock;
}

export function obterMockCategoria(categoryId) {
  carregarMocks();
  return categoriesMock[categoryId] || { categories: [] };
}
