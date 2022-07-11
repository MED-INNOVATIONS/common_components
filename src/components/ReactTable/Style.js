import styled from "styled-components";

export default styled.div`
.table {
  display: inline-block;
  border-spacing: 0;
  border: 1px solid #dee2e6;

  .tr {
    :last-child {
      .td {
        border-bottom: 0;
      }
    }
    .td {
      overflow-x: hidden;
    }
  }

  .th,
  .td {
    margin: 0;
    padding: 0.5rem;
    border-bottom: 1px solid #dee2e6;
    border-right: 1px solid #dee2e6;

    ${"" /* In this example we use an absolutely position resizer,
      so this is required. */}
    position: relative;

    :last-child {
      border-right: 0;
    }

    .resizer {
      right: 0;
      background: #dee2e6;
      width: 1px;
      height: 100%;
      position: absolute;
      top: 0;
      z-index: 1;
      ${"" /* prevents from scrolling while dragging on touch devices */}
      touch-action :none;

      &.isResizing {
        background: black;
      }
    }
  }
}
`;