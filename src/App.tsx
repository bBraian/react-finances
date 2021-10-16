import { useState, useEffect } from 'react';
import * as C from './App.styles';
import { Category } from './types/Category';
import { Item } from './types/Item';
import { categories } from './data/categories';
import { items } from './data/items';
import { getCurrentMonth } from './helpers/dateFilter';

const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        
        {/* Área de infos */}

        {/* Área de insert */}

        {/* Tabela dos itens */}

      </C.Body>
    </C.Container>
  );
}

export default App;