// components
import PageHeader from '@layout/PageHeader';
import SellerProfilesList from '@widgets/SellerProfilesList';

const SellersList = () => {
    return (
      <>

        <PageHeader title="Danh sách cửa hàng" />
        <div>
          <SellerProfilesList />
        </div>
      </>
    );
}

export default SellersList