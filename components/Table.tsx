import React, { useState } from 'react';
import { styled } from '../stitches.config';
import { Checkbox } from './Checkbox';
import { Label as Badge } from './Label';

interface Cell<T extends any = any> extends React.FC<{ value: any }> {}

type Column = {
  Header: string;
  accessor: string | null;
  ellipsis?: boolean;
  expandable?: boolean;
  fixedWidth?: number;
  align?: 'right' | 'center';
  columnClassName?: string;
  Cell?: Cell;
};

type Data = any;

type HeaderActionParams = { idsChecked: string[]; disabled: boolean };
type RowActionParams = { row: any; rowIdx: number };

interface Props {
    columns?: Column[];
    data?: Data[];
    caption?: string;
    overflow?: number;
    header?: boolean;
    sticky?: boolean;
    sortable?: boolean;
    defaultRows?: number;
    selectable?: boolean;
    fixed?: boolean;
    headerActions?: (params: HeaderActionParams) => JSX.Element;
    rowActions?: (params: RowActionParams) => JSX.Element;
    width?: string;
    height?: string; 
    empty?: JSX.Element;
  }
const Wrapper = styled('div', {
  fontSize: '0.875rem',
  '--sticky-offset': '0px',
  '--sticky-shadow': '0 12px 12px -12px rgba(0, 0, 0, 0.12)',

  variants: {
    overflow: {
      true: {
        overflowX: 'auto',
      },
    },
  },
});

const TableWrapper = styled('div', {
  minWidth: 'var(--overflow-width, 650px)',
});

const Table = styled('table', {
  borderCollapse: 'separate',
  borderSpacing: 0,
  width: '100%',

  variants: {
    selectable: {
      true: {
        tableLayout: 'fixed',
      },
    },
    sticky: {
      true: {
        tableLayout: 'fixed',
      },
    },
    fixed: {
      true: {
        tableLayout: 'fixed',
      },
    },
  },
});

const ColGroup = styled('colgroup', {});

const Th = styled('th', {
  background: '$surfaceColor',
  color: '$secondary-body-text',
  fontSize: '0.75rem',
  fontWeight: 400,
  letterSpacing: 0,
  textTransform: 'uppercase',
  padding: '0 $geist-gap-half',
  textAlign: 'left',
  verticalAlign: 'middle',
  borderTop: '1px solid $accents-2',
  borderBottom: '1px solid $accents-2',

  variants: {
    align: {
      right: {
        textAlign: 'right',
      },
      center: {
        textAlign: 'center',
      },
    },
  },

  defaultVariants: {
    align: 'left',
  },
});

const Td = styled('td', {
  padding: '$geist-gap-quarter $geist-gap-half',
  verticalAlign: 'middle',
  color: '$accents-6',

  variants: {
    ellipsis: {
      true: {
        tableLayout: 'fixed',
      },
    },
    align: {
      right: {
        textAlign: 'right',
      },
      center: {
        textAlign: 'center',
      },
    },
  },
});

const TableCaption = styled('caption', {
  composes: 'reset.visuallyHidden',
});

const BadgeCount = styled(Badge, {
  composes: 'count',
});

const Actions = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
});

const Empty = styled('div', {
  color: '$accents-5',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
});

const Placeholder = styled('div', {
  width: '100%',
  height: 'calc(var(--rows, 1) * var(--geist-gap-double))',
  background: 'repeating-linear-gradient(transparent, transparent 47px, $accents-2 47px, $accents-2 48px)',
  position: 'relative',
  '&:after': {
    content: "''",
    width: '100%',
    height: '1px',
    position: 'absolute',
    bottom: '0',
    left: '0',
    background: '$geist-background',
  },
});

const EmptySpan = styled('span', {
  composes: '',
});

const CustomTable: React.FC<React.PropsWithChildren<Props>> = ({
  selectable,
  columns = [],
  data = [],
  caption = 'A basic table',
  overflow,
  header = true,
  headerActions,
  rowActions,
  width = '100%',
  height = '100%',
  defaultRows,
  sticky,
  empty,
}) => {
  const [idsChecked, setIdsChecked] = useState<string[]>([]);

  return (
    <Wrapper css={overflow ? { overflowX: 'auto' } : {}}>
      <TableWrapper>
        <Table
          css={{
            tableLayout: sticky ? 'fixed' : 'auto',
          }}
          role="table"
        >
          <TableCaption className="reset.visuallyHidden">{caption}</TableCaption>
          <ColGroup>
            {selectable && <col style={{ width: '40px' }} />}
            {columns.map((col, i) => (
              <col key={`${col.Header}${i}`} />
            ))}
            {selectable && <col style={{ width: '40px' }} />}
          </ColGroup>
          <thead className={header === false ? 'geist-visually-hidden' : undefined}>
            <tr role="row">
              {selectable && (
                <Th colSpan={1} role="columnheader">
                  <div className="container">
                    <Checkbox
                      indeterminate={
                        !(idsChecked.length === 0) && idsChecked.length !== data?.length
                      }
                      checked={idsChecked.length === data?.length && data?.length !== 0}
                      disabled={data.length === 0}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setIdsChecked(data?.map((e) => e.id));
                        } else {
                          setIdsChecked([]);
                        }
                      }}
                    />
                  </div>
                </Th>
              )}
              {columns.map((column, i) => {     
                const { Header, fixedWidth, align } = column;

                return (
                  <Th
                    colSpan={1}
                    role="columnheader"
                    key={`${column.accessor}${i}`}
                    style={{ width: fixedWidth }}
                    className={align ? align : ''}
                  >
                    <div className="container">{Header}</div>
                  </Th>
                );
              })}
              {selectable && (
                <Th colSpan={1} role="columnheader" style={{ width: '40px' }} className="right">
                  <div className="container">
                    <div className="actions">
                      {!!idsChecked.length && (
                        <BadgeCount type="secondary" variant="contrast">
                          {idsChecked.length}
                        </BadgeCount>
                      )}
                      {typeof headerActions === 'function' &&
                        headerActions({
                          idsChecked,
                          disabled: idsChecked.length === 0,
                        })}
                    </div>
                  </div>
                </Th>
              )}
            </tr>
          </thead>
          <tbody role="rowgroup">
            {data?.map((row, rowIdx) => (
              <tr role="row" key={row.id ?? rowIdx}>
                {selectable && (
                  <Td role="cell">
                    <div className="container">
                      <Checkbox
                        checked={idsChecked.includes(row.id)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setIdsChecked((ids) => [...ids, row.id]);
                          } else {
                            setIdsChecked((ids) => ids.filter((id) => id !== row.id));
                          }
                        }}
                      />
                    </div>
                  </Td>
                )}
                {columns.map((column, colIdx) => {
                  const { accessor, Cell, ellipsis, align } = column;

                  const cn = clsx(
                    {
                      ellipsis: ellipsis,
                      center: align === 'center',
                      right: align === 'right',
                    },
                    columnClassName
                  );

                  const key = `${accessor}${colIdx}`;

                  if (Cell) {
                    if (accessor === null) {
                      return (
                        <Td role="cell" className={cn} key={key}>
                          <Cell value={row} />
                        </Td>
                      );
                    }
                    return (
                      <Td role="cell" className={cn} key={key}>
                        <Cell value={row[accessor]} />
                      </Td>
                    );
                  }
                  return (
                    <Td role="cell" className={cn} key={key}>
                      {row[accessor]}
                    </Td>
                  );
                })}
                {selectable && (
                  <Td role="cell" style={{ width: '40px' }} className="right">
                    <div className="container">
                      {typeof rowActions === 'function' &&
                        rowActions({
                          row,
                          rowIdx,
                        })}
                    </div>
                  </Td>
                )}
              </tr>
            ))}
          </tbody>
        </Table>
        {!data || data?.length === 0 ? (
          empty ? (
            <Empty
              style={{ '--rows': defaultRows } as any}
            >
              <EmptySpan>{empty}</EmptySpan>
            </Empty>
          ) : (
            <Placeholder
              aria-hidden="true"
              style={{ '--rows': defaultRows } as any}
            />
          )
        ) : null}
      </TableWrapper>
    </Wrapper>
  );
};

export default CustomTable;
