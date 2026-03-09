const { default: Reviews } = require('../src/app/pages/reviews/page');
const { default: RootLayout } = require('../src/app/layout');
const library =  require('@testing-library/jest-dom')
const { render, screen, fireEvent } = require('@testing-library/react');

jest.mock('next/navigation', () => ({
    useRouter: () => ({
        push: jest.fn(),
        events: {
            on: jest.fn(),
            off: jest.fn(),
            emit: jest.fn(),
        },
        isFallback: false,
    }),
}));

describe('Layout', () => {
  it('Check existing modals', () => {
    render(<RootLayout />)
    
    // price selection 
    var link = screen.getByText('Trong tầm giá')
    fireEvent.click(link)
    expect(screen.getByText('Lọc khoảng giá')).toBeInTheDocument();
    // firm selection 
    var link2 = screen.getByText('Tên sản phẩm')
    fireEvent.click(link2)
    expect(screen.getByText('Lọc thương hiệu')).toBeInTheDocument();
  })
  // it('Check navigations', () => {
  //   const push = jest.fn();

  //   useRouter.mockImplementation(() => ({
  //     asPath: "/",
  //     push,
  //   }))

  //   render(<RootLayout />)

  //   var link = screen.getByText('Giới thiệu')
  //   fireEvent.click(link)

  //   expect(push).toHaveBeenCalledWith("/pages/reviews")

  // })
})
