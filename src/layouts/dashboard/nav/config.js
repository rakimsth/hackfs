// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Verified Documents',
    path: '/dashboard/verified-docs',
    icon: icon('ic_document'),
  },
  {
    title: 'Revoked Documents',
    path: '/dashboard/revoked-docs',
    icon: icon('ic_revoked_docs'),
  },
  {
    title: 'Verification Requests',
    path: '/dashboard/verification-requests',
    icon: icon('ic_request'),
  },
  {
    title: 'Known Validators',
    path: '/dashboard/known-validators',
    icon: icon('ic_validators'),
  },
  {
    title: 'My KYC',
    path: '/dashboard/my-kyc',
    icon: icon('ic_user'),
  },
  {
    title: 'Verifiers',
    path: '/dashboard/verifiers',
    icon: icon('ic_verifiers'),
  },
  {
    title: 'Share KYC',
    path: '/dashboard/share-kyc',
    icon: icon('ic_share'),
  },
  {
    title: 'login',
    path: '/login',
    icon: icon('ic_lock'),
  },
];

export default navConfig;
