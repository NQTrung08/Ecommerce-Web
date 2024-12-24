// components
import PageHeader from '@layout/PageHeader';
import SellerProfilesList from '@widgets/SellerProfilesList';

const SellersList = () => {
    return (
      <>
        <PageHeader title="Danh sách  người bán" />
        <SellerProfilesList />
      </>
    );
}

export default SellersList